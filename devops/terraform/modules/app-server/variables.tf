variable "resource_prefix" {
  description = "Prefixos a serem aplicados nos nomes dos recursos do Gestão à Vista"
  default = "gestaoavistadti-dev"
}

variable "location" {
  description = "Local dos recursos do Gestão à Vista no Azure"
  default = "East US 2"
}

variable "environment_tag" {
  description = "Tag para o ambiente que está sendo criado"
  default = "dev"
}