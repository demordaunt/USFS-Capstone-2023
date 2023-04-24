library(shiny)
library(leaflet)
library(tidyverse)
library(leaflet.extras2)
library(shinyscreenshot)
library(htmltools)
library(htmlwidgets)
library(rsconnect)

#MAKE SURE YOUR CURRENT WORKING DIRECTORY IS shinyapp (the folder downloaded from github)

googledownload <- function(id) {
  read.csv(sprintf("https://docs.google.com/uc?id=%s&export=download", id), row.names=NULL, stringsAsFactors = F)
}
# data is being pulled from : https://drive.google.com/file/d/1FTF8Qsl6Ix_V4NTLucC7AenTdGab9Ntg/view?usp=share_link
plot <- googledownload('1FTF8Qsl6Ix_V4NTLucC7AenTdGab9Ntg')

# data is being pulled from : https://drive.google.com/file/d/1Iy8R6xebI7NE_xLeDC_L7BCyI5tzbSXl/view?usp=share_link
lichen_1 <-googledownload('1Iy8R6xebI7NE_xLeDC_L7BCyI5tzbSXl')

# data is being pulled from : https://drive.google.com/file/d/1KfW2aSOggASVbaUKXDJbAM7QqDR3R6OT/view?usp=share_link
lichen_2 <-googledownload('1KfW2aSOggASVbaUKXDJbAM7QqDR3R6OT') 
lichen_2 = lichen_2 %>% select(-row.names)
lichen <- rbind(lichen_1, lichen_2)

# data is being pulled from : https://drive.google.com/file/d/1nb1x4Zl35V7m-ToWY1RKzuZKm6rY0uiL/view?usp=share_link
elemental <- googledownload('1nb1x4Zl35V7m-ToWY1RKzuZKm6rY0uiL')

# data is being pulled from : https://drive.google.com/file/d/18nf6IeXiw3bhKNUKxu4nMIxHxVOT4oOJ/view?usp=share_link
long_lat <- googledownload('18nf6IeXiw3bhKNUKxu4nMIxHxVOT4oOJ')

r_colors <- rgb(t(col2rgb(colors()) / 255))
names(r_colors) <- colors()

fulL_dataset <- long_lat 

#creating data table to match the lichen Species to the megadbid
#lichen_species_data <- read.csv("MegaDbLICHEN_2021.06.03v3.csv") %>% 
lichen_species_data <- lichen %>% 
  select(c("megadbid", "scinamepkt")) %>% 
  distinct(megadbid, .keep_all = TRUE)

data_points <- long_lat %>%
  select(c("latusedd", "longusedd", "year", "megadbid"))%>%
  na.omit()

data_points$LatandLong <- str_c(data_points$longusedd, ",", data_points$latusedd, ",", data_points$year, ",", data_points$megadbid)  

unique_longandlat <- data_points%>%
  pull(LatandLong) %>% unique() %>% data.frame()

unique_longandlat[c("Long", "Lat", "Year", "megadbid")] <- str_split_fixed(unique_longandlat$., ",", 4)

years <- unique_longandlat %>% pull("Year") %>% unique()

unique_longandlat$Lat<- as.numeric(unique_longandlat$Lat)
unique_longandlat$Long <- as.numeric(unique_longandlat$Long)
unique_longandlat$Year <- as.numeric(unique_longandlat$Year)

elemental_data <- elemental %>%
  select(c("ba_ppm", "al_ppm", "co_ppm", "megadbid"))

elemental_data$ba_ppm <- as.integer(elemental_data$ba_ppm)
elemental_data$al_ppm <- as.integer(elemental_data$al_ppm)
elemental_data$co_ppm <- as.integer(elemental_data$co_ppm)
elemental_data$megadbid <- as.character(elemental_data$megadbid)

## @Emi Categorized ppm 
## @ToDO: updates for thresholds need to be updated. 
## could be good to make this into a function later. 
order = c("Background", "Normal", "Elevated", "Highly Elevated")
elemental_data$ba_ppm_categorized <- cut(elemental_data$ba_ppm,
                   breaks=c(-Inf, 5.0, 14.9, 23.2, Inf),
                   labels=order)
## toxic ~> 200.228ppm - 500.571ppm
## lethal ~> 3003.427ppm - 4004.569ppm

elemental_data$al_ppm_categorized <- cut(elemental_data$al_ppm,
                   breaks=c(-Inf, 5.0, 14.9, 23.2, Inf),
                   labels=order)
##legal limit for air ~> 5 mg/m3
## toxic ~> -
## lethal ~> -

elemental_data$co_ppm_categorized <- cut(elemental_data$co_ppm,
                   breaks=c(-Inf, 5.0, 14.9, 23.2, Inf),
                   labels=order)
## normal ~> 0.1 to 2.2 mcg/L in urine sample
## toxic ~> 100 µg L−1
## lethal ~>  seems to be pretty high

elemental_data$ba_ppm <- factor(elemental_data$ba_ppm_categorized, levels=order)
elemental_data$al_ppm <- factor(elemental_data$al_ppm_categorized, levels=order)
elemental_data$co_ppm <- factor(elemental_data$co_ppm_categorized, levels=order)

plot_elemental_data <- left_join(unique_longandlat, elemental_data, by = "megadbid") 

#Combine small_sample_data and Lichen_species_data based off of megadbid HERE
small_sample_data <-

small_sample_data <- head(plot_elemental_data, 5000) #This is where the amt of data points are being used it decided
class(small_sample_data$Year)
small_sample_data$Year <- as.numeric(small_sample_data$Year)
class(small_sample_data)
ba_ppm_color <- colorFactor(palette = "Oranges", small_sample_data$ba_ppm, levels=order, na.color = NA)
co_ppm_color <- colorFactor(palette = "Oranges", small_sample_data$co_ppm, levels=order, na.color = NA)
al_ppm_color <- colorFactor(palette = "Oranges", small_sample_data$al_ppm, levels=order, na.color = NA)

# this controls the front end of the app - how you would add new elements
ui <- fluidPage(
  
  tags$style(type = "text/css", "
             .irs-slider {width: 30px; height: 30px; top: 22px;}
             .irs-grid-text {font-size: 20px}
             .irs--shiny .irs-to, .irs--shiny .irs-from, .irs--shiny .irs-single{ font-size: 17px; color: black; background: transparent}"),
  
  # this renders the map on the page 
  leafletOutput("mymap"),
  p(),
  #this puts the range slider on the page and gives it a max and a min
  sliderInput("range", "Year", min(small_sample_data$Year), 2012, value = range(small_sample_data$Year), step = 1, sep = "",
              width = "100%"),
  
  ## a download button that pdownloads the map from the page 
  downloadButton("mymapDownload", label = "Download Map"),
 
)


# the server function controls the backend of the app
server <- function(input, output, session) {
  

  #this function updates the data whenever the user updates the slider 
  filteredData <- reactive({
    small_sample_data [small_sample_data$Year >= input$range[1] & small_sample_data$Year <= input$range[2],] 
  })

  #this gives the map in the UI output its data
  output$mymap <- renderLeaflet({
    
    # select data
    leaflet(data = small_sample_data) %>%
      setView(-111.6490794, 40.2447787, 10) %>% 
      addEasyButton(easyButton(
        icon="fa-globe", title="Zoom to Level 1",
        onClick=JS("function(btn, map){ map.setZoom(24); }"))) %>%
      addEasyButton(easyButton(
        icon="fa-crosshairs", title="Locate Me",
        onClick=JS("function(btn, map){ map.locate({setView: true}); map.setZoom(14)}"))) %>%
    #leaflet(data = filteredData()) %>%
      # add differnt map layers
      addProviderTiles(providers$Stamen.TonerLite, options = providerTileOptions(noWrap = TRUE), group = "Basic Map") %>%
      addProviderTiles(providers$Esri.WorldImagery, options = providerTileOptions(noWrap = TRUE), group = "Topographical")%>%
      addProviderTiles(providers$Esri.WorldTopoMap, options = providerTileOptions(noWrap = TRUE), group = "Lined Topographical")%>%
      #addMarkers(~Long, ~Lat, group = "Plot Markers")%>%
      #add the ability to select different layers
      addLayersControl(
        baseGroups = c("Basic Map", "Topographical", "Lined Topographical"),
        overlayGroups = c("Barium", "Cobalt", "Aluminium", "Plot Markers"),
        options = layersControlOptions(collapsed = FALSE)
      )%>%
      #add legends for the element concentrations
    addLegend('bottomleft', pal = ba_ppm_color, values = small_sample_data$ba_ppm,
              title = 'Color Gradient for Barium (parts per million)',
              opacity = 1, group = "Barium")%>%
      addLegend('bottomleft', pal = co_ppm_color, values = small_sample_data$co_ppm,
                title = 'Color Gradient for Cobalt (parts per million)',
                opacity = 1, group = "Cobalt") %>%
      addLegend('bottomleft', pal = al_ppm_color, values = small_sample_data$al_ppm,
                title = 'Color Gradient for Aluminium (parts per million)',
                opacity = 1, group = "Aluminium")%>%
      # don't show these groups till they are selected
      hideGroup(c("Barium", "Aluminium", "Cobalt")) 
      
  })
  # store the current user-created version
  # of the Leaflet map for download in 
  # a reactive expression
  user.created.map <- reactive({
    
    # call the foundational Leaflet map
    output$mymap %>%
      
      # store the view based on UI
      setView( lng = input$map_center$lng
               ,  lat = input$map_center$lat
               , zoom = input$map_zoom
      )
    
  }) # end of creating user.created.map()
  
  
#   #@Emi's addin for downloading the map -- not sure if it works yet. 
   output$mymapDownload <- downloadHandler(
    filename = "CustomLeafletmap.pdf"
    
    , content = function(file) {
      mapshot( x = user.created.map
               , file = file
               , cliprect = "viewport" # the clipping rectangle matches the height & width from the viewing port
               , selfcontained = FALSE # when this was not specified, the function for produced a PDF of two pages: one of the leaflet map, the other a blank page.
      )
    } # end of content() function
  ) # end of downloadHandler() function
  
  factop <- function(x) {
    ifelse(is.na(x), 0, 1)
  }
  circleMarkerOutline <- function(x)  {
    ifelse(is.na(x), F,"black")
  }
 
  
  #whenever the user selects a different year range the points and circles are updated
  observe({
    leafletProxy("mymap", data = filteredData())%>%
      clearMarkers()%>%
      #popup argument is where optionality of what is shown in popup is determined
      addMarkers(~Long, ~Lat, group = "Plot Markers", popup = ~htmlEscape(Year))%>%
      clearShapes()%>%
      #addCircles(~Long, ~Lat, ~ba_ppm*500, stroke = F, color = ~ba_ppm_color(ba_ppm),group = "ba_ppm")%>%
      #addCircles(~Long, ~Lat, ~co_ppm*500, stroke = F, color = ~co_ppm_color(co_ppm) ,group = "co_ppm")%>%
      #addCircleMarkers(~Long, ~Lat, ~al_ppm*500, stroke = F, color = ~al_ppm_color(al_ppm) ,group = "al_ppm")
      addCircleMarkers(~Long, ~Lat, radius = 7.5, popup = ~htmlEscape(Year), color = ~circleMarkerOutline(ba_ppm), stroke = T, weight = 0.4, fillColor = ~ba_ppm_color(ba_ppm), fillOpacity = ~factop(ba_ppm), group = "Barium")%>%
      addCircleMarkers(~Long, ~Lat, radius = 7.5, popup = ~htmlEscape(Year), color = ~circleMarkerOutline(co_ppm), stroke = T, weight = 0.4, fillColor = ~co_ppm_color(co_ppm), fillOpacity = ~factop(co_ppm) ,group = "Cobalt")%>%
      addCircleMarkers(~Long, ~Lat, radius = 7.5, popup = ~htmlEscape(Year), color = ~circleMarkerOutline(al_ppm), stroke = T, weight = 0.4, fillColor = ~al_ppm_color(al_ppm), fillOpacity = ~factop(al_ppm) ,group = "Aluminium")
    click<-input$map_marker_click
  })
}

shinyApp(ui, server)
