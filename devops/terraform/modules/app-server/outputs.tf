output "app_service_name" {
  value = "${azurerm_app_service.gav_appserver.name}"
}

output "app_service_default_hostname" {
  value = "https://${azurerm_app_service.gav_appserver.default_site_hostname}"
}