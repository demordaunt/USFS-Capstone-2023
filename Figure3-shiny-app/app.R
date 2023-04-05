library(shiny)
library(tidyr)
library(tidyverse)
library(ggplot2)



googledownload <- function(id) {
  read.csv(sprintf("https://docs.google.com/uc?id=%s&export=download", id), row.names=NULL)
}

#plot_database <- read.csv("~/Desktop/PWS465/shinyapp2/MegaDbPLOT_2022.10.06v2 minus FIA locale.csv", stringsAsFactors = F)
#lichen_database <- read.csv("~/Desktop/PWS465/shinyapp2/MegaDbLICHEN_2021.06.03V3.csv", stringsAsFactors = F) 
#elemental_database <- read.csv("~/Desktop/PWS465/shinyapp2/MegaDbELEMENTAL_2021.05.30.csv", stringsAsFactors = F)
# data is being pulled from : https://drive.google.com/file/d/1FTF8Qsl6Ix_V4NTLucC7AenTdGab9Ntg/view?usp=share_link
plot_database <- googledownload('1FTF8Qsl6Ix_V4NTLucC7AenTdGab9Ntg')
#https://drive.google.com/file/d/1Iy8R6xebI7NE_xLeDC_L7BCyI5tzbSXl/view?usp=share_link
lichen_1 <-googledownload('1Iy8R6xebI7NE_xLeDC_L7BCyI5tzbSXl')
#https://drive.google.com/file/d/1KfW2aSOggASVbaUKXDJbAM7QqDR3R6OT/view?usp=share_link/view?usp=share_link
lichen_2 <-googledownload('1KfW2aSOggASVbaUKXDJbAM7QqDR3R6OT') 
lichen_2 = lichen_2 %>% select(-row.names)
lichen_database <- rbind(lichen_1, lichen_2)

# data is being pulled from : https://drive.google.com/file/d/1nb1x4Zl35V7m-ToWY1RKzuZKm6rY0uiL/view?usp=share_link
elemental_database <- googledownload('1nb1x4Zl35V7m-ToWY1RKzuZKm6rY0uiL')


# plot_database <- read.csv("~/Desktop/PWS465/shinyapp2/MegaDbPLOT_2022.10.06v2 minus FIA locale.csv", stringsAsFactors = F)
# lichen_database <- read.csv("~/Desktop/PWS465/shinyapp2/MegaDbLICHEN_2021.06.03V3.csv", stringsAsFactors = F) 
# elemental_database <- read.csv("~/Desktop/PWS465/shinyapp2/MegaDbELEMENTAL_2021.05.30.csv", stringsAsFactors = F)


wilderness_megadbid <- plot_database %>% select(megadbid, wilderns, area)


lichen_database <- left_join(lichen_database, wilderness_megadbid)

element_plot_choices <- c('al_ppm', 'b_ppm', 'ba_ppm', 'be_ppm', 'br_ppm', 'ca_ppm', 'cd_ppm', 'co_ppm', 'cr_ppm', 'cu_ppm', 'f_ppm', 'fe_ppm', 'hg_ppb', 'k_ppm', 'li_ppm', 'mg_ppm', 'mn_ppm', 'mo_ppm', 'na_ppm', 'ni_ppm', 'p_ppm', 'pb_ppm', 'rb_ppm', 'si_ppm', 'sn_ppm', 'sr_ppm', 'ti_ppm', 'v_ppm', 'zn_ppm', 'no3n_ppm')
plot_plot_choices <- c("Sulfur Airscore", "Nitrogen Airscore")
lichen_plot_choices <- c("Histogram of Lichen Species")

ui <- fluidPage(
  titlePanel("Database Exploration Tool"),
  sidebarLayout(
    
    sidebarPanel(
      radioButtons("data", #name of input
                   label = "Data:", #label displayed in ui
                   choices = c("Lichen", "Elemental", "Plot"),
                   # calls unique values from the State column in the previously created table
      ) ,
      htmlOutput("region_selector"),
      htmlOutput("national_forest_selector"),
      htmlOutput("wilderness_selector"),
      htmlOutput("variable1_selector")
    ),
    mainPanel(
      h3(textOutput("caption")),
      plotOutput("elementalPlot")
    )
  ),
  downloadButton('downloadPlot', label = "Download Plot"),
  downloadButton('downloadData', label = "Download Dataset")
)

server <- function(input, output){
  
  #   output$data_selector = renderUI({ #creates State select box object called in ui
  # #default choice (not required)
  #   })
  
  data_available <- reactive({
    if(input$data == "Lichen"){
      data_active = lichen_database %>% 
        rename("reg_id" = nfs_reg)
    }else if(input$data == "Elemental"){
      data_active = elemental_database #%>%
      #mutate(year=make_date(year=year))  
      
    }else if(input$data == "Plot"){
      data_active = plot_databse %>% 
        rename("reg_id" = nfs_reg)
    } 
  })
  
  choice_vector <- reactive({
    if(input$data == "Lichen"){
      choice_vector = lichen_plot_choices
    }else if(input$data == "Elemental"){
      choice_vector = element_plot_choices
    }else if(input$data == "Plot"){
      choice_vector = plot_plot_choices
    } 
  })
  
  output$region_selector = renderUI({ #creates State select box object called in ui
    selectInput(inputId = "region", #name of input
                label = "Region:", #label displayed in ui
                choices = as.character(data_available() %>% pull(reg_id)%>%unique()%>%sort()),
                # calls unique values from the State column in the previously created table
    ) #default choice (not required)
  })
  output$national_forest_selector = renderUI({#creates County select box object called in ui
    
    forest_data = data_available() %>% filter(reg_id == as.integer(input$region))
    #creates a reactive list of available counties based on the State selection made
    
    selectInput(inputId = "national_forest", #name of input
                label = "National Forest:", #label displayed in ui
                choices = unique(forest_data$area), #calls list of available counties
                #selected = unique(data_available)[1]
    )
  })
  output$wilderness_selector = renderUI({#creates County select box object called in ui
    wilderness_data = data_available() %>% filter(area == input$national_forest)
    #creates a reactive list of available counties based on the State selection made
    
    selectInput(inputId = "wilderness", #name of input
                label = "Wilderness:", #label displayed in ui
                choices = unique(wilderness_data$wilderns), #calls list of available counties
    )
  })
  
  output$variable1_selector = renderUI({#creates County select box object called in ui
    variable_data = data_available() %>% filter(wilderns == input$wilderness)
    
    #creates a reactive list of available counties based on the State selection made
    
    selectInput(inputId = "variable1", #name of input
                label = "Select an Output:", #label displayed in ui
                choices = choice_vector()
    )
  })
  
  output$elementalPlot = renderPlot({
    variable_data = data_available() %>% filter(wilderns == input$wilderness)
    if(input$data == "Lichen"){
      if(input$variable1 == "Histogram of Lichen Species"){
        #output$plot1 <- renderPlot({
        ggplot(variable_data, aes(x=sci_22chklst))+
          geom_bar()+
          theme(axis.text.x = element_text(angle = 90))+
          labs(x = "Lichen Species", title = paste("Histogram of Lichen Species within", input$wilderness))
        
        #})
        #plotOutput("plot1")
        
      }
    }else if(input$data == "Elemental"){
      ggplot(variable_data, aes_string(x=input$variable1, y='year'))+
        geom_point()+
        theme_bw()+
        theme(axis.text.x = element_text(angle = 90))+
        labs(x = "Element Concentration", title = paste("Histogram of", input$variable1,"Concentration"))
      
    }else if(input$data == "Plot"){
      if(input$variable1 == "Sulfur Airscore"){
        ggplot(variable_data, aes(x=plot, y=s_airscore, fill="black"))+
          geom_col()+
          scale_fill_identity()+
          theme(axis.text.x = element_text(angle = 90, size=15),axis.text.y = element_text(size=15),legend.text = element_text(size=15),axis.title = element_text(size =18), title=element_text(size=18, face="bold"))+
          labs(x = "Lichen Sampling Plot", y = "Sulfur Airscore", title = paste("Airscore for Lichen Sampling Plots in", input$wilderness), fill ="Sulfur Airscore" )
      }else if(input$variable == "Nitrogen Airscore"){
        ggplot(variable_data, aes_string(x="plot", y='n_airscore'))+
          geom_col()+
          scale_fill_manual(values = "black")+
          theme(axis.text.x = element_text(angle = 90))+
          labs(x = "Lichen Sampling Plot", y = "Nitrogen Airscore", title = paste("Airscore for each Lichen Sampling Plot in", input$wilderness))
        
      }
    }
    
    # ggplot(variable_data, aes_string(x=input$variable1))+
    #   geom_bar()+
    #   theme(axis.text.x = element_text(angle = 90))
  })
  
  output$downloadPlot <- downloadHandler(
    filename = 'plot.png',
    content = function(file) {
      ggsave(file, plot = "elementalPlot", device = "png")
    }
  )
  output$downloadData <- downloadHandler(
    filename = 'dataset.csv',
    content = function(file) {
      write.csv(variable_data, file)
    }
  )
  
}

shinyApp(ui, server)
