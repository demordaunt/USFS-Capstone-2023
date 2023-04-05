library(tidyverse)
library("broom")

#data = read_csv("/Users/emi/Downloads/data/MegaDbELEMENTAL_2021.05.30.csv")
data = read_csv("data/MegaDbELEMENTAL_2021.05.30.csv")

elements = data[, grepl("ppm|ppb", names(data))]
#elements = transform(elements,  = as.numeric(char))

elements <- sapply(elements, as.numeric)
elements = as.tibble(elements)
summary = tibble("name" = character(),"min" = double(), "first" = double(), "median" = double(), "third" = double(), "mean" = double(), "max" = double(), "nas" = integer())
names = colnames(elements)
for (n in 1:length(names)){
  col = elements[names[n]]
  name = names[n]
  min = min(col, na.rm=TRUE)
  first = quantile(col, probs = c(0.25), na.rm=TRUE)
  median = quantile(col, probs = c(0.50), na.rm=TRUE)
  third = quantile(col, probs = c(0.75), na.rm=TRUE)
  max = max(col, na.rm=TRUE)
  mean = mean(pull(col, name), na.rm = TRUE)
  nas = sum(is.na(col))
  summary = add_row(summary, name = name, min = min, first = first, median = median, third = third, mean = mean, max = max, nas = nas)
}
#write.csv(summary, "/Volumes/Ultra Touch/Capstone Bio465/elementalDistributionSummary.csv", row.names=FALSE)

write.csv(summary, "data\elementalDistributionSummary.csv", row.names=FALSE)




