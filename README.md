Node.js
Node.js is an open-source, cross-platform JavaScript runtime environment.

For information on using Node.js, see the Node.js website.

The Node.js project uses an open governance model. The OpenJS Foundation provides support for the project.

Contributors are expected to act in a collaborative manner to move the project forward. We encourage the constructive exchange of contrary opinions and compromise. The TSC reserves the right to limit or block contributors who repeatedly act in ways that discourage, exhaust, or otherwise negatively affect other participants.

This project has a Code of Conduct.

Table of contents
Support
Release types
Download
Current and LTS releases
Nightly releases
API documentation
Verifying binaries
Building Node.js
Security
Contributing to Node.js
Current project team members
TSC (Technical Steering Committee)
Collaborators
Triagers
Release keys
License
Support
Looking for help? Check out the instructions for getting support.

Release types
Current: Under active development. Code for the Current release is in the branch for its major version number (for example, v19.x). Node.js releases a new major version every 6 months, allowing for breaking changes. This happens in April and October every year. Releases appearing each October have a support life of 8 months. Releases appearing each April convert to LTS (see below) each October.
LTS: Releases that receive Long Term Support, with a focus on stability and security. Every even-numbered major version will become an LTS release. LTS releases receive 12 months of Active LTS support and a further 18 months of Maintenance. LTS release lines have alphabetically-ordered code names, beginning with v4 Argon. There are no breaking changes or feature additions, except in some special circumstances.
Nightly: Code from the Current branch built every 24-hours when there are changes. Use with caution.
Current and LTS releases follow semantic versioning. A member of the Release Team signs each Current and LTS release. For more information, see the Release README.

Download
Binaries, installers, and source tarballs are available at https://nodejs.org/en/download/.

Current and LTS releases
https://nodejs.org/download/release/

The latest directory is an alias for the latest Current release. The latest-codename directory is an alias for the latest release from an LTS line. For example, the latest-hydrogen directory contains the latest Hydrogen (Node.js 18) release.

Nightly releases
https://nodejs.org/download/nightly/

Each directory name and filename contains a date (in UTC) and the commit SHA at the HEAD of the release.

API documentation
Documentation for the latest Current release is at https://nodejs.org/api/. Version-specific documentation is available in each release directory in the docs subdirectory. Version-specific documentation is also at https://nodejs.org/download/docs/.

Verifying binaries
Download directories contain a SHASUMS256.txt file with SHA checksums for the files.

To download SHASUMS256.txt using curl:

curl -O https://nodejs.org/dist/vx.y.z/SHASUMS256.txt
To check that a downloaded file matches the checksum, run it through sha256sum with a command such as:

grep node-vx.y.z.tar.gz SHASUMS256.txt | sha256sum -c -
For Current and LTS, the GPG detached signature of SHASUMS256.txt is in SHASUMS256.txt.sig. You can use it with gpg to verify the integrity of SHASUMS256.txt. You will first need to import the GPG keys of individuals authorized to create releases. To import the keys:

gpg --keyserver hkps://keys.openpgp.org --recv-keys 4ED778F539E3634C779C87C6D7062848A1AB005C
See Release keys for a script to import active release keys.

Next, download the SHASUMS256.txt.sig for the release:

curl -O https://nodejs.org/dist/vx.y.z/SHASUMS256.txt.sig
Then use gpg --verify SHASUMS256.txt.sig SHASUMS256.txt to verify the file's signature.

Building Node.js
See BUILDING.md for instructions on how to build Node.js from source and a list of supported platforms.

Security
For information on reporting security vulnerabilities in Node.js, see SECURITY.md.

Contributing to Node.js
Contributing to the project
Working Groups
Strategic initiatives
Technical values and prioritization
Current project team members
For information about the governance of the Node.js project, see GOVERNANCE.md.

TSC (Technical Steering Committee)
TSC voting members
aduh95 - Antoine du Hamel <duhamelantoine1995@gmail.com> (he/him)
apapirovski - Anatoli Papirovski <apapirovski@mac.com> (he/him)
benjamingr - Benjamin Gruenbaum <benjamingr@gmail.com>
BridgeAR - Ruben Bridgewater <ruben@bridgewater.de> (he/him)
GeoffreyBooth - Geoffrey Booth <webadmin@geoffreybooth.com> (he/him)
gireeshpunathil - Gireesh Punathil <gpunathi@in.ibm.com> (he/him)
jasnell - James M Snell <jasnell@gmail.com> (he/him)
joyeecheung - Joyee Cheung <joyeec9h3@gmail.com> (she/her)
legendecas - Chengzhong Wu <legendecas@gmail.com> (he/him)
marco-ippolito - Marco Ippolito <marcoippolito54@gmail.com> (he/him)
mcollina - Matteo Collina <matteo.collina@gmail.com> (he/him)
mhdawson - Michael Dawson <midawson@redhat.com> (he/him)
MoLow - Moshe Atlow <moshe@atlow.co.il> (he/him)
RafaelGSS - Rafael Gonzaga <rafael.nunu@hotmail.com> (he/him)
richardlau - Richard Lau <rlau@redhat.com>
ronag - Robert Nagy <ronagy@icloud.com>
ruyadorno - Ruy Adorno <ruy@vlt.sh> (he/him)
ShogunPanda - Paolo Insogna <paolo@cowtech.it> (he/him)
targos - Michaël Zasso <targos@protonmail.com> (he/him)
tniessen - Tobias Nießen <tniessen@tnie.de> (he/him)
TSC regular members
anonrig - Yagiz Nizipli <yagiz.nizipli@sentry.io> (he/him)
BethGriggs - Beth Griggs <bethanyngriggs@gmail.com> (she/her)
bnoordhuis - Ben Noordhuis <info@bnoordhuis.nl>
cjihrig - Colin Ihrig <cjihrig@gmail.com> (he/him)
codebytere - Shelley Vohr <shelley.vohr@gmail.com> (she/her)
danielleadams - Danielle Adams <adamzdanielle@gmail.com> (she/her)
MylesBorins - Myles Borins <myles.borins@gmail.com> (he/him)
Trott - Rich Trott <rtrott@gmail.com> (he/him)
TSC emeriti members
Collaborators
addaleax - Anna Henningsen <anna@addaleax.net> (she/her)
aduh95 - Antoine du Hamel <duhamelantoine1995@gmail.com> (he/him)
anonrig - Yagiz Nizipli <yagiz.nizipli@sentry.io> (he/him)
apapirovski - Anatoli Papirovski <apapirovski@mac.com> (he/him)
atlowChemi - Chemi Atlow <chemi@atlow.co.il> (he/him)
Ayase-252 - Qingyu Deng <i@ayase-lab.com>
bengl - Bryan English <bryan@bryanenglish.com> (he/him)
benjamingr - Benjamin Gruenbaum <benjamingr@gmail.com>
BethGriggs - Beth Griggs <bethanyngriggs@gmail.com> (she/her)
bnb - Tierney Cyren <hello@bnb.im> (they/them)
bnoordhuis - Ben Noordhuis <info@bnoordhuis.nl>
BridgeAR - Ruben Bridgewater <ruben@bridgewater.de> (he/him)
cclauss - Christian Clauss <cclauss@me.com> (he/him)
cjihrig - Colin Ihrig <cjihrig@gmail.com> (he/him)
codebytere - Shelley Vohr <shelley.vohr@gmail.com> (she/her)
cola119 - Kohei Ueno <kohei.ueno119@gmail.com> (he/him)
daeyeon - Daeyeon Jeong <daeyeon.dev@gmail.com> (he/him)
danielleadams - Danielle Adams <adamzdanielle@gmail.com> (she/her)
debadree25 - Debadree Chatterjee <debadree333@gmail.com> (he/him)
deokjinkim - Deokjin Kim <deokjin81.kim@gmail.com> (he/him)
edsadr - Adrian Estrada <edsadr@gmail.com> (he/him)
erickwendel - Erick Wendel <erick.workspace@gmail.com> (he/him)
Ethan-Arrowood - Ethan Arrowood <ethan@arrowood.dev> (he/him)
F3n67u - Feng Yu <F3n67u@outlook.com> (he/him)
fhinkel - Franziska Hinkelmann <franziska.hinkelmann@gmail.com> (she/her)
Flarna - Gerhard Stöbich <deb2001-github@yahoo.de> (he/they)
gabrielschulhof - Gabriel Schulhof <gabrielschulhof@gmail.com>
gengjiawen - Jiawen Geng <technicalcute@gmail.com>
GeoffreyBooth - Geoffrey Booth <webadmin@geoffreybooth.com> (he/him)
gireeshpunathil - Gireesh Punathil <gpunathi@in.ibm.com> (he/him)
guybedford - Guy Bedford <guybedford@gmail.com> (he/him)
H4ad - Vinícius Lourenço Claro Cardoso <contact@viniciusl.com.br> (he/him)
HarshithaKP - Harshitha K P <harshitha014@gmail.com> (she/her)
himself65 - Zeyu "Alex" Yang <himself65@outlook.com> (he/him)
JakobJingleheimer - Jacob Smith <jacob@frende.me> (he/him)
jasnell - James M Snell <jasnell@gmail.com> (he/him)
jkrems - Jan Krems <jan.krems@gmail.com> (he/him)
joesepi - Joe Sepi <sepi@joesepi.com> (he/him)
joyeecheung - Joyee Cheung <joyeec9h3@gmail.com> (she/her)
juanarbol - Juan José Arboleda <soyjuanarbol@gmail.com> (he/him)
JungMinu - Minwoo Jung <nodecorelab@gmail.com> (he/him)
KhafraDev - Matthew Aitken <maitken033380023@gmail.com> (he/him)
kuriyosh - Yoshiki Kurihara <yosyos0306@gmail.com> (he/him)
kvakil - Keyhan Vakil <kvakil@sylph.kvakil.me>
legendecas - Chengzhong Wu <legendecas@gmail.com> (he/him)
lemire - Daniel Lemire <daniel@lemire.me>
linkgoron - Nitzan Uziely <linkgoron@gmail.com>
LiviaMedeiros - LiviaMedeiros <livia@cirno.name>
lpinca - Luigi Pinca <luigipinca@gmail.com> (he/him)
lukekarrys - Luke Karrys <luke@lukekarrys.com> (he/him)
Lxxyx - Zijian Liu <lxxyxzj@gmail.com> (he/him)
marco-ippolito - Marco Ippolito <marcoippolito54@gmail.com> (he/him)
marsonya - Akhil Marsonya <akhil.marsonya27@gmail.com> (he/him)
mcollina - Matteo Collina <matteo.collina@gmail.com> (he/him)
meixg - Xuguang Mei <meixuguang@gmail.com> (he/him)
Mesteery - Mestery <mestery@protonmail.com> (he/him)
mhdawson - Michael Dawson <midawson@redhat.com> (he/him)
mildsunrise - Alba Mendez <me@alba.sh> (she/her)
MoLow - Moshe Atlow <moshe@atlow.co.il> (he/him)
MrJithil - Jithil P Ponnan <jithil@outlook.com> (he/him)
MylesBorins - Myles Borins <myles.borins@gmail.com> (he/him)
ovflowd - Claudio Wunder <cwunder@gnome.org> (he/they)
panva - Filip Skokan <panva.ip@gmail.com> (he/him)
pimterry - Tim Perry <pimterry@gmail.com> (he/him)
Qard - Stephen Belanger <admin@stephenbelanger.com> (he/him)
RafaelGSS - Rafael Gonzaga <rafael.nunu@hotmail.com> (he/him)
richardlau - Richard Lau <rlau@redhat.com>
rluvaton - Raz Luvaton <rluvaton@gmail.com> (he/him)
ronag - Robert Nagy <ronagy@icloud.com>
ruyadorno - Ruy Adorno <ruy@vlt.sh> (he/him)
santigimeno - Santiago Gimeno <santiago.gimeno@gmail.com>
ShogunPanda - Paolo Insogna <paolo@cowtech.it> (he/him)
srl295 - Steven R Loomis <srl295@gmail.com>
StefanStojanovic - Stefan Stojanovic <stefan.stojanovic@janeasystems.com> (he/him)
sxa - Stewart X Addison <sxa@redhat.com> (he/him)
targos - Michaël Zasso <targos@protonmail.com> (he/him)
theanarkh - theanarkh <theratliter@gmail.com> (he/him)
tniessen - Tobias Nießen <tniessen@tnie.de> (he/him)
trivikr - Trivikram Kamat <trivikr.dev@gmail.com>
Trott - Rich Trott <rtrott@gmail.com> (he/him)
UlisesGascon - Ulises Gascón <ulisesgascongonzalez@gmail.com> (he/him)
vmoroz - Vladimir Morozov <vmorozov@microsoft.com> (he/him)
VoltrexKeyva - Mohammed Keyvanzadeh <mohammadkeyvanzade94@gmail.com> (he/him)
watilde - Daijiro Wachi <daijiro.wachi@gmail.com> (he/him)
XadillaX - Khaidi Chu <i@2333.moe> (he/him)
zcbenz - Cheng Zhao <zcbenz@gmail.com> (he/him)
ZYSzys - Yongsheng Zhang <zyszys98@gmail.com> (he/him)
Emeriti
Collaborators follow the Collaborator Guide in maintaining the Node.js project.

Triagers
atlowChemi - Chemi Atlow <chemi@atlow.co.il> (he/him)
Ayase-252 - Qingyu Deng <i@ayase-lab.com>
bmuenzenmeyer - Brian Muenzenmeyer <brian.muenzenmeyer@gmail.com> (he/him)
CanadaHonk - Oliver Medhurst <honk@goose.icu> (they/them)
daeyeon - Daeyeon Jeong <daeyeon.dev@gmail.com> (he/him)
F3n67u - Feng Yu <F3n67u@outlook.com> (he/him)
himadriganguly - Himadri Ganguly <himadri.tech@gmail.com> (he/him)
iam-frankqiu - Frank Qiu <iam.frankqiu@gmail.com> (he/him)
marsonya - Akhil Marsonya <akhil.marsonya27@gmail.com> (he/him)
meixg - Xuguang Mei <meixuguang@gmail.com> (he/him)
mertcanaltin - Mert Can Altin <mertgold60@gmail.com>
Mesteery - Mestery <mestery@protonmail.com> (he/him)
PoojaDurgad - Pooja Durgad <Pooja.D.P@ibm.com>
preveen-stack - Preveen Padmanabhan <wide4head@gmail.com> (he/him)
RedYetiDev - Aviv Keller <redyetidev@gmail.com> (they/them)
VoltrexKeyva - Mohammed Keyvanzadeh <mohammadkeyvanzade94@gmail.com> (he/him)
Triagers follow the Triage Guide when responding to new issues.

Release keys
Primary GPG keys for Node.js Releasers (some Releasers sign with subkeys):

Beth Griggs <bethanyngriggs@gmail.com> 4ED778F539E3634C779C87C6D7062848A1AB005C
Bryan English <bryan@bryanenglish.com> 141F07595B7B3FFE74309A937405533BE57C7D57
Danielle Adams <adamzdanielle@gmail.com> 74F12602B6F1C4E913FAA37AD3A89613643B6201
Juan José Arboleda <soyjuanarbol@gmail.com> DD792F5973C6DE52C432CBDAC77ABFA00DDBF2B7
Marco Ippolito <marcoippolito54@gmail.com> CC68F5A3106FF448322E48ED27F5E38D5B0A215F
Michaël Zasso <targos@protonmail.com> 8FCCA13FEF1D0C2E91008E09770F7A9A5AE15600
Myles Borins <myles.borins@gmail.com> C4F0DFFF4E8C1A8236409D08E73BC641CC11F4C8
Rafael Gonzaga <rafael.nunu@hotmail.com> 890C08DB8579162FEE0DF9DB8BEAB4DFCF555EF4
Richard Lau <rlau@redhat.com> C82FA3AE1CBEDC6BE46B9360C43CEC45C17AB93C
Ruy Adorno <ruyadorno@hotmail.com> 108F52B48DB57BB0CC439B2997B01419BD92F80A
Ulises Gascón <ulisesgascongonzalez@gmail.com> A363A499291CBBC940DD62E41F10027AF002F8B0
To import the full set of trusted release keys (including subkeys possibly used to sign releases):

gpg --keyserver hkps://keys.openpgp.org --recv-keys 4ED778F539E3634C779C87C6D7062848A1AB005C # Beth Griggs
gpg --keyserver hkps://keys.openpgp.org --recv-keys 141F07595B7B3FFE74309A937405533BE57C7D57 # Bryan English
gpg --keyserver hkps://keys.openpgp.org --recv-keys 74F12602B6F1C4E913FAA37AD3A89613643B6201 # Danielle Adams
gpg --keyserver hkps://keys.openpgp.org --recv-keys DD792F5973C6DE52C432CBDAC77ABFA00DDBF2B7 # Juan José Arboleda
gpg --keyserver hkps://keys.openpgp.org --recv-keys CC68F5A3106FF448322E48ED27F5E38D5B0A215F # Marco Ippolito
gpg --keyserver hkps://keys.openpgp.org --recv-keys 8FCCA13FEF1D0C2E91008E09770F7A9A5AE15600 # Michaël Zasso
gpg --keyserver hkps://keys.openpgp.org --recv-keys C4F0DFFF4E8C1A8236409D08E73BC641CC11F4C8 # Myles Borins
gpg --keyserver hkps://keys.openpgp.org --recv-keys 890C08DB8579162FEE0DF9DB8BEAB4DFCF555EF4 # Rafael Gonzaga
gpg --keyserver hkps://keys.openpgp.org --recv-keys C82FA3AE1CBEDC6BE46B9360C43CEC45C17AB93C # Richard Lau
gpg --keyserver hkps://keys.openpgp.org --recv-keys 108F52B48DB57BB0CC439B2997B01419BD92F80A # Ruy Adorno
gpg --keyserver hkps://keys.openpgp.org --recv-keys A363A499291CBBC940DD62E41F10027AF002F8B0 # Ulises Gascón
See Verifying binaries for how to use these keys to verify a downloaded file.

Other keys used to sign some previous releases
Security release stewards
When possible, the commitment to take slots in the security release steward rotation is made by companies in order to ensure individuals who act as security stewards have the support and recognition from their employer to be able to prioritize security releases. Security release stewards manage security releases on a rotation basis as outlined in the security release process.

Datadog
bengl - Bryan English <bryan@bryanenglish.com> (he/him)
NodeSource
juanarbol - Juan José Arboleda <soyjuanarbol@gmail.com> (he/him)
RafaelGSS - Rafael Gonzaga <rafael.nunu@hotmail.com> (he/him)
Platformatic
mcollina - Matteo Collina <matteo.collina@gmail.com> (he/him)
Red Hat and IBM
joesepi - Joe Sepi <joesepi@ibm.com> (he/him)
mhdawson - Michael Dawson <midawson@redhat.com> (he/him)
License
Node.js is available under the MIT license. Node.js also includes external libraries that are available under a variety of licenses. See LICENSE for the full license text.

