variable "do_token" {}
variable "pvt_key" {}
variable "include_dev" { default = false }


provider "digitalocean" {
  token = var.do_token
}


data "digitalocean_ssh_key" "terraform" {
  name = "Ueno-ssh-0"
}

resource "digitalocean_domain" "pkae2illustrations" {
  name = "pkae2illustrations.com"
}

resource "digitalocean_domain" "sfoster3" {
  name = "sfoster3.com"
}


resource "digitalocean_app" "iw-prod" {
  spec {
    name   = "iw-prod"
    region = "sfo"

    domain {
      name = digitalocean_domain.pkae2illustrations.name
      type = "PRIMARY"
      zone = digitalocean_domain.pkae2illustrations.name
    }

    static_site {

      github {
        repo           = "xyrider0/IllustrationWebsite"
        branch         = "release"
        deploy_on_push = true
      }

      name              = "static"
      build_command     = "npm ci; npm run build"
      source_dir        = "/web_pkae2"
      output_dir        = "/build"
      catchall_document = "index.html"
    }
  }
}

resource "digitalocean_app" "iw-dev" {
  count = var.include_dev ? 1 : 0
  spec {
    name   = "iw-dev"
    region = "sfo"

    domain {
      name = digitalocean_domain.sfoster3.name
      type = "PRIMARY"
      zone = digitalocean_domain.sfoster3.name
    }

    static_site {

      github {
        repo           = "xyrider0/IllustrationWebsite"
        branch         = "main"
        deploy_on_push = false
      }

      name              = "static"
      build_command     = "npm ci; npm run build"
      source_dir        = "/web_pkae2"
      output_dir        = "/build"
      catchall_document = "index.html"
    }
  }
}

locals {
  app_ids = concat([digitalocean_app.iw-prod.id], digitalocean_app.iw-dev[*].id)
}

resource "digitalocean_project" "iw1" {
  name        = "Illustration Website v1"
  environment = "Development"
  resources   = concat([
    digitalocean_domain.pkae2illustrations.urn, digitalocean_domain.sfoster3.urn
  ], [for id in local.app_ids : "do:app:${id}"])
}