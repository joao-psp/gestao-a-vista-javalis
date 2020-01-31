terraform {
  backend "azurerm" {
    storage_account_name = "dtidigitalgeneralstorage"
    container_name       = "terraform"
    #key                  = "Must be set from command-line or TF_CLI_ARGS_init="-backend-config=\"key=gestaoavistadti-dev.terraform.tfstate\""
  }
}
module "app-server" {
  source = "./modules/app-server"

  resource_prefix = "${var.resource_prefix}"
  location = "${var.location}"
  environment_tag = "${var.environment_tag}"
}