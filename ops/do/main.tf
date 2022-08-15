variable "do_token" {}
variable "pvt_key" {}


provider "digitalocean" {
  token = var.do_token
}


data "digitalocean_ssh_key" "terraform" {
  name = "Ueno-ssh-0"
}

resource "digitalocean_domain" "samtest" {
  name = "sfoster3.com"
}


resource "digitalocean_app" "iw1" {
  spec {
    name   = "iw1"
    region = "sfo"

    domain {
      name = digitalocean_domain.samtest.name
      type = "PRIMARY"
      zone = digitalocean_domain.samtest.name
    }

    static_site {

      github {
        repo           = "xyrider0/IllustrationWebsite"
        branch         = "main"
        deploy_on_push = false
      }

      name              = "iw1"
      build_command     = "npm ci; npm run build"
      source_dir        = "/web_pkae2"
      output_dir        = "/build"
      catchall_document = "index.html"
    }
  }
}

resource "digitalocean_project" "iw1" {
  name        = "Illustration Website v1"
  environment = "Development"
  resources   = ["do:app:${digitalocean_app.iw1.id}", digitalocean_domain.samtest.urn]
}