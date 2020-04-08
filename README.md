# API Project: Request Header Parser Microservice

### User stories:
1. I can get the IP address, preferred languages (from header `Accept-Language`) and system infos (from header `User-Agent`) for my device.

#### Example usage:
* https://request-header-parser-lb.glitch.me/api/whoami

#### Example output:
* `{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5","software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}`

![screencapture-request-header-parser-lb-glitch-me-2020-04-08-20_50_34](https://user-images.githubusercontent.com/58770446/78822199-f47ebf00-79da-11ea-8ea1-679ec8eb0ef9.png)