---
layout: default
title: "SEE-GRID CA"
date: 2012-12-09 13:06
comments: false
sharing: false
footer: false
styles: [data-table]
sidebar: false
page.footer: false
---


## Overview

SEE-GRID CA is a Certification Authority managed and operated by the GRNET S.A., coordinator of the Greek National Grid Initiative, in cooperation with the Scientific Computing Center at the Aristotle University of Thessaloniki.

## Brief History

In the period between July 2004 and April 2010, SEE-GRID CA had been operating in the context of the SEE-GRID Regional Grid Infrastructure project series (SEE-GRID-I 2004-2006, SEE-GRID-II 2006-2008, SEE-GRID-SCI 2008-2010) with the mandate to provide catch all PKI services to the wider region of South Eastern Europe in order to facilitate the needs of distributed computing and pave the way for the countries in the region to establish their own national Public Key Infrastructure and guide them through the IGTF accreditation process.

Since May 2010, SEE-GRID CA provides Catch-All PKI services for the European Grid Initiative (EGI.eu) in the context of EGI-InSPiRe Project.

## Certificate Policy and Certification Practice Statement (CP/CPS)

The current version of the SEE-GRID CA CP/CPS is version 2.2.

* [SEE-GRID CA CP/CPS v2.2][cps22]
* [SEE-GRID CA CP/CPS v2.1][cps21] _(Superseded by v2.2)_
* [SEE-GRID CA CP/CPS v2.0][cps20] _(Superseded by v2.1)_
* [SEE-GRID CA CP/CPS v1.1][cps11] _(Superseded by v2.0)_
* [SEE-GRID CA CP/CPS v1.0][cps10] _(Superseded by v1.1)_

[cps22]: /assets/SEE-GRID-CA-CP-CPS-2.2.pdf
[cps21]: /assets/SEE-GRID-CA-CP-CPS-2.1.pdf
[cps20]: /assets/SEE-GRID-CA-CP-CPS-2.0.pdf
[cps11]: /assets/SEE-GRID-CA-CP-CPS-1.1.pdf
[cps10]: /assets/SEE-GRID-CA-CP-CPS-1.0.pdf

## Trust Anchors

Trust Anchors (TAs) are cryptographic public keys used for digital signing of other public keys and some additional meta data associated with those public keys (e.g. X.509 digital certificates of Certification Authorities (CAs)) or other data

The CA certificate and CRLs are needed in order to correctly verify the validity of a certificate that has been issued by the SEE-GRID CA.

### Certificates

* [SEE-GRID CA certificate in PEM format][cert-pem]
* [SEE-GRID CA certificate in DER format][cert-der]
* [Import the SEE-GRID CA root certificate in your browser][cert-import]

### Certificate Revocation Lists

* [SEE-GRID CA CRL in PEM format][crl-pem]
* [SEE-GRID CA CRL in DER format][crl-der]

[cert-pem]: http://crl.grid.auth.gr/seegrid-ca/cert/see-grid-ca-cert.pem
[cert-der]: http://crl.grid.auth.gr/seegrid-ca/cert/see-grid-ca-cert.der
[cert-import]: http://crl.grid.auth.gr/seegrid-ca/cert/468d15b3.cacrt
[crl-pem]: http://crl.grid.auth.gr/seegrid-ca/crl-v2.pem
[crl-der]: http://crl.grid.auth.gr/seegrid-ca/crl-v2.crl

### Fingerprint & hashes

    SHA1 fingerprint: CE:DB:DD:E2:DC:74:A8:84:86:36:EB:73:F4:F3:84:E9:98:B3:F5:6D 
    OpenSSL 0.x hash: 468d15b3
    OpenSSL 1.x hash: dd51b42a

## Registration Authorities

The procedures of identification and authentication of the certificate applicants are performed by trusted individuals (Registration Authorities), appointed by the SEE-GRID CA.

The table below contains the current list of Registration Authorities. 


|#   | Country                | Registration Authority                              | RA Manager          | e-mail                                |
|----|------------------------|-----------------------------------------------------|---------------------|---------------------------------------|
|1   | Greece                 |  GRNET                                              | Ognjen Prnjat       | oprnjat at grnet dot gr               |
|2   | Albania                |  Polytechic University of Tirana (PUT)              | Marin Aranitasi     | maranitasi at fti dot edu dot al      |
|3   | Bosnia and Herzegovina |  University of Banja Luka                           | Mihajlo Savic       | badaboom at etfbl dot net             |
|4   | Bosnia and Herzegovina |  University of Sarajevo                             | Haris Gavranovic    | haris at pmf dot unsa dot ba          |
|5   | Georgia                |  GRENA                                              | Nugzar Gamtsemlidze | ngamtsemlidze at grena dot ge         |
|6   | Azerbaijan             |  National Academy of Sciences                       | Shahla Khalilova    | shahla.khalilova at azgrid dot org    |
|7   | Senegal                |  Univesity Chaukh Anta DIOP                         | Bassirou Kasse      | bassirou.kasse at ucad dot edu dot sn |
|8   | Switzerland            |  SixSq                                              | Marc-Elian Begin    | meb at sixsq dot com                  |
|9   | South Africa           |  South African National Bioinformatics Instititute  | Peter van Heusden   | pvh at sanbi dot ac dot zat           |
|10  | Nigeria                |  University of Nigeria Nsukka                       | Collins N. Udanor   | collins.udanor at unn dot edu dot ng  |

 <br />

For further information on how to setup and operate a SEE-GRID CA Registration Authority, you can contact the us at see-grid-ca at hellasgrid dot gr