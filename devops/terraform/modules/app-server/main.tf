provider "azurerm" {
  version = ">1.28.0"
}

resource "azurerm_resource_group" "gav_rg" {
  name     = "${var.resource_prefix}"
  location = "${var.location}"
  tags = {
    terraform = "true"
    environment = "${var.environment_tag}"
  }
}

resource "azurerm_app_service_plan" "gav_plan" {
  name = "${var.resource_prefix}"
  location = "${var.location}"
  resource_group_name = "${azurerm_resource_group.gav_rg.name}"
  sku {
    tier = "Free"
    size = "F1"
  }
  tags = {
    terraform = "true"
    environment = "${var.environment_tag}"
  }
}

resource "azurerm_app_service" "gav_appserver" {
  name = "${var.resource_prefix}"
  location = "${var.location}"
  resource_group_name = "${azurerm_resource_group.gav_rg.name}"
  app_service_plan_id = "${azurerm_app_service_plan.gav_plan.id}"
  client_affinity_enabled = false
  site_config {
    dotnet_framework_version = "v4.0"
    use_32_bit_worker_process = true
    default_documents = ["Default.htm",
      "Default.html",
      "Default.asp",
      "index.htm",
      "index.html",
      "iisstart.htm",
      "default.aspx",
      "index.php",
      "hostingstart.html"
    ]
  }
  tags = {
    terraform = "true"
    environment = "${var.environment_tag}"
  }
}