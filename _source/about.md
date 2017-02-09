---
layout: default
title: "SEE-GRID CA"
date: 2015-05-15 12:50
comments: false
sharing: false
footer: false
styles: [data-table]
sidebar: false
page.footer: false
---


## Overview

SEE-GRID CA is a Certification Authority managed by GRNET S.A., coordinator of the National Grid Initiative, and operated in cooperation with the Scientific Computing Center at the Aristotle University of Thessaloniki.

## Brief History

In the period between July 2004 and April 2010, SEE-GRID CA had been operating in the context of the SEE-GRID Regional Grid Infrastructure project series (SEE-GRID-I 2004-2006, SEE-GRID-II 2006-2008, SEE-GRID-SCI 2008-2010) with the mandate to provide catch all PKI services to the wider region of South Eastern Europe in order to facilitate the needs of distributed computing and pave the way for the countries in the region to establish their own national Public Key Infrastructure and guide them through the IGTF accreditation process.

Since May 2010, SEE-GRID CA provides Catch-All PKI services for the European Grid Initiative (EGI.eu) in the context of EGI-InSPiRe Project.

## Certificate Policy and Certification Practice Statement (CP/CPS)

The current version of the SEE-GRID CA CP/CPS is version 2.4.

* [SEE-GRID CA CP/CPS v2.4][cps24]
* [SEE-GRID CA CP/CPS v2.3][cps23] _(Superseded by v2.4)_
* [SEE-GRID CA CP/CPS v2.2][cps22] _(Superseded by v2.3)_
* [SEE-GRID CA CP/CPS v2.1][cps21] _(Superseded by v2.2)_
* [SEE-GRID CA CP/CPS v2.0][cps20] _(Superseded by v2.1)_
* [SEE-GRID CA CP/CPS v1.1][cps11] _(Superseded by v2.0)_
* [SEE-GRID CA CP/CPS v1.0][cps10] _(Superseded by v1.1)_

[cps24]: /assets/SEE-GRID-CA-CP-CPS-2.4.pdf
[cps23]: /assets/SEE-GRID-CA-CP-CPS-2.3.pdf
[cps22]: /assets/SEE-GRID-CA-CP-CPS-2.2.pdf
[cps21]: /assets/SEE-GRID-CA-CP-CPS-2.1.pdf
[cps20]: /assets/SEE-GRID-CA-CP-CPS-2.0.pdf
[cps11]: /assets/SEE-GRID-CA-CP-CPS-1.1.pdf
[cps10]: /assets/SEE-GRID-CA-CP-CPS-1.0.pdf

## Trust Anchors

Trust Anchors (TAs) are cryptographic public keys used for digital signing of other public keys and some additional meta data associated with those public keys (e.g. X.509 digital certificates of Certification Authorities) or other data

The CA certificate and CRLs are needed in order to correctly verify the validity of a certificate that has been issued by the SEE-GRID CA.

### SEE-GRID CA

Below you can find information about the new SEE-GRID CA signing certificate that is in effect since 1/1/2014. The information about the previous signing certificate, which was in effect until 31/12/2013, has been [archived]

[archived]: /see-grid-ca-2004-2013.html

#### Certificate & CRL

* [SEE-GRID CA certificate in PEM format][cert-pem]
* [SEE-GRID CA CRL in PEM format][crl-pem]

[cert-pem]: http://crl.hellasgrid.gr/seegrid-ca-2013/cert.pem
[crl-pem]: http://crl.hellasgrid.gr/seegrid-ca-2013/crl-v2.pem

#### Fingerprint & hashes

    SHA1 fingerprint: DD:8C:D9:6E:18:AB:53:92:40:15:BF:DA:EB:F9:6F:31:EB:4F:69:66 
    OpenSSL 0.x hash: da213f5b
    OpenSSL 1.x hash: ad9d1b74

## Registration Authorities

The procedures of identification and authentication of the certificate applicants are performed by trusted individuals (Registration Authorities), appointed by the SEE-GRID CA.

The table below contains the current list of Registration Authorities. 


|#   | Country                | Registration Authority                              | RA Manager          | e-mail                                |
|----|------------------------|-----------------------------------------------------|---------------------|---------------------------------------|
|1   | Greece                 |  GRNET                                              | Ognjen Prnjat       | oprnjat at grnet dot gr               |
|2   | Albania                |  Polytechic University of Tirana (PUT)              | Ada Gogu            | agogu at fti dot edu dot al           |
|3   | Bosnia and Herzegovina |  University of Banja Luka                           | Mihajlo Savic       | badaboom at etfbl dot net             |
|4   | Bosnia and Herzegovina |  University of Sarajevo                             | Haris Gavranovic    | haris at pmf dot unsa dot ba          |
|5   | Georgia                |  GRENA                                              | Nugzar Gamtsemlidze | ngamtsemlidze at grena dot ge         |
|6   | Azerbaijan             |  National Academy of Sciences                       | Shahla Khalilova    | shahla.khalilova at azgrid dot net    |
|7   | Senegal                |  Univesity Chaukh Anta DIOP                         | Bassirou Kasse      | bassirou.kasse at ucad dot edu dot sn |
|8   | Switzerland            |  SixSq Sarl                                         | Charles Loomis      | cal at sixsq dot com                  |
|9   | South Africa           |  South African National Bioinformatics Instititute  | Peter van Heusden   | pvh at sanbi dot ac dot zat           |
|10  | Nigeria                |  University of Nigeria Nsukka                       | Collins N. Udanor   | collins.udanor at unn dot edu dot ng  |
|11  | Tanzania               |  Tanzania Education and Research Network            | Damas Makweba       | damas.makweba at ternet dot or dot tz |
|12  | Switzerland            |  University of Bern                                 | Sigve Haug, Alexander Kashev   | sigve.haug at lhep dot unibe dot ch , alexander.kashev at math dot unibe dot ch  |
|13  | Italy                  |  Terradue Srl                                       | Fabrice Brito, Cesare Rossi    | fabrice.brito at terradue dot com , cesare.rossi at terradue dot com    |

 <br />

For further information on how to setup and operate a SEE-GRID CA Registration Authority, you can contact the us at see-grid-ca at hellasgrid dot gr
