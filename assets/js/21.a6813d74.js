(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{313:function(e,t,r){"use strict";r.r(t);var a=r(10),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"intel-gpus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#intel-gpus"}},[e._v("#")]),e._v(" Intel GPUs")]),e._v(" "),t("p",[e._v("So we'll be going over the compatible iGPUs present in Intel's CPUs. The main thing to note is that you'll need to apply the framebuffer patches to your system to get things to work properly. "),t("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Please refer to this post for more info on framebuffer patching as it goes in depth on how to get your system running"),t("OutboundLink")],1),e._v(". We will also be excluding iGPUs present in Pentiums, Celerons and Atom CPUs as these generally have never been supported natively and require quite a bit of extra work to get them working (to be more specific, GT1 based iGPUs don't work, Apple only uses GT2 and up in their Macs).")]),e._v(" "),t("p",[t("strong",[e._v("DRM Issues")]),e._v(": With Haswell and newer iGPUs, DRM is outright broken on them with macOS Catalina. This includes iTunes Movies, Apple TV+, Amazon Prime and Netflix, the only fix is getting a supported dGPU, preferably Polaris or newer.")]),e._v(" "),t("p",[e._v("More info:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.Chart.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("WhateverGreen's DRM Chart"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"native-intel-igpus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#native-intel-igpus"}},[e._v("#")]),e._v(" Native Intel iGPUs")]),e._v(" "),t("h3",{attrs:{id:"ivy-bridge-3xxx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ivy-bridge-3xxx"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Ivy Bridge 3XXX")])]),e._v(" "),t("h4",{attrs:{id:"highest-supported-os-big-sur-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#highest-supported-os-big-sur-11"}},[e._v("#")]),e._v(" Highest Supported OS: Big Sur (11)")]),e._v(" "),t("h4",{attrs:{id:"initial-supported-os-lion-10-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initial-supported-os-lion-10-7"}},[e._v("#")]),e._v(" Initial Supported OS: Lion (10.7)")]),e._v(" "),t("p",[e._v("The HD4000 is supported natively up to macOS Big Sur, with support dropped in macOS Monterey. The HD 2500, on the other hand, only has partial support in Mojave for quick sync features. As the HD 2500 does not support hardware acceleration, you will need a compatible dGPU for display purposes.")]),e._v(" "),t("p",[e._v("Supported iGPUs:")]),e._v(" "),t("ul",[t("li",[e._v("HD 2500")]),e._v(" "),t("li",[e._v("HD 4000")]),e._v(" "),t("li",[e._v("HD P4000")])]),e._v(" "),t("p",[e._v("Framebuffer:")]),e._v(" "),t("ul",[t("li",[e._v("AAPL,ig-platform-id (desktop):\n"),t("ul",[t("li",[e._v("0x0166000A (default)\n"),t("ul",[t("li",[e._v("0A006601 (hex swapped)")])])]),e._v(" "),t("li",[e._v("0x01620005\n"),t("ul",[t("li",[e._v("05006201 (hex swapped)")])])])])]),e._v(" "),t("li",[e._v("AAPL,ig-platform-id (laptop):\n"),t("ul",[t("li",[e._v("0x01660004 (Recommended, 1600x900 screens or higher)\n"),t("ul",[t("li",[e._v("04006601 (hex swapped)")])])]),e._v(" "),t("li",[e._v("0x01660009 (Alternative, eDP or autodetect)\n"),t("ul",[t("li",[e._v("09006601 (hex swapped)")])])]),e._v(" "),t("li",[e._v("0x01660003 (1366x768 screens)\n"),t("ul",[t("li",[e._v("03006601 (hex swapped)")])])])])])]),e._v(" "),t("p",[e._v("Needed kexts:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/Lilu/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lilu.kext"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("WhateverGreen.kext"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel Framebuffer Patching guide"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"haswell-4xxx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#haswell-4xxx"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Haswell 4XXX")])]),e._v(" "),t("h4",{attrs:{id:"highest-supported-os-monterey-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#highest-supported-os-monterey-12"}},[e._v("#")]),e._v(" Highest Supported OS: Monterey (12)")]),e._v(" "),t("h4",{attrs:{id:"initial-supported-os-mountain-lion-10-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initial-supported-os-mountain-lion-10-8"}},[e._v("#")]),e._v(" Initial Supported OS: Mountain Lion (10.8)")]),e._v(" "),t("p",[e._v("Most iGPUs are supported here, only one to be concerned about is the HD 4400, which requires either a fake ID with WhateverGreen or a modified ACPI path.")]),e._v(" "),t("p",[e._v("Supported iGPUs:")]),e._v(" "),t("ul",[t("li",[e._v("HD 4200")]),e._v(" "),t("li",[e._v("HD 4400 (HD 4600 Fake ID required for this iGPU)")]),e._v(" "),t("li",[e._v("HD 4600")]),e._v(" "),t("li",[e._v("HD 5000")]),e._v(" "),t("li",[e._v("HD 5100")]),e._v(" "),t("li",[e._v("HD P4600 (Theoretically)")]),e._v(" "),t("li",[e._v("HD P4700 (Theoretically)")])]),e._v(" "),t("p",[e._v("Framebuffer:")]),e._v(" "),t("ul",[t("li",[e._v("AAPL,ig-platform-id (desktop):\n"),t("ul",[t("li",[e._v("0x0D220003 (default)\n"),t("ul",[t("li",[e._v("0300220D (hex swapped)")])])])])]),e._v(" "),t("li",[e._v("AAPL,ig-platform-id (laptop):\n"),t("ul",[t("li",[e._v("0x0A160000 (default)\n"),t("ul",[t("li",[e._v("0000160A (hex swapped)")])])]),e._v(" "),t("li",[e._v("0x0A260005 (recommended)\n"),t("ul",[t("li",[e._v("0500260A (hex swapped)")])])])])])]),e._v(" "),t("p",[e._v("Needed kexts:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/Lilu/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lilu.kext"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("WhateverGreen.kext"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel Framebuffer Patching guide"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"broadwell-5xxx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#broadwell-5xxx"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Broadwell 5XXX")])]),e._v(" "),t("h4",{attrs:{id:"highest-supported-os-monterey-12-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#highest-supported-os-monterey-12-2"}},[e._v("#")]),e._v(" Highest Supported OS: Monterey (12)")]),e._v(" "),t("h4",{attrs:{id:"initial-supported-os-yosemite-10-10-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initial-supported-os-yosemite-10-10-2"}},[e._v("#")]),e._v(" Initial Supported OS: Yosemite (10.10.2)")]),e._v(" "),t("p",[e._v("All iGPUs are supported here, no issues to report.")]),e._v(" "),t("p",[e._v("Supported iGPUs:")]),e._v(" "),t("ul",[t("li",[e._v("HD 5300")]),e._v(" "),t("li",[e._v("HD 5500")]),e._v(" "),t("li",[e._v("HD 5600")]),e._v(" "),t("li",[e._v("HD 6000")]),e._v(" "),t("li",[e._v("HD 6100")]),e._v(" "),t("li",[e._v("HD 6200")]),e._v(" "),t("li",[e._v("HD P5700 (Theoretically)")]),e._v(" "),t("li",[e._v("Iris Pro P6300")])]),e._v(" "),t("p",[e._v("Framebuffer:")]),e._v(" "),t("ul",[t("li",[e._v("AAPL,ig-platform-id (desktop):\n"),t("ul",[t("li",[e._v("0x16220007 (default)\n"),t("ul",[t("li",[e._v("07002216 (hex swapped)")])])])])]),e._v(" "),t("li",[e._v("AAPL,ig-platform-id (laptop):\n"),t("ul",[t("li",[e._v("0x16260006 (default)\n"),t("ul",[t("li",[e._v("06002616 (hex swapped)")])])])])])]),e._v(" "),t("p",[e._v("Needed kexts:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/Lilu/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lilu.kext"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("WhateverGreen.kext"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel Framebuffer Patching guide"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"skylake-6xxx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#skylake-6xxx"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Skylake 6XXX")])]),e._v(" "),t("h4",{attrs:{id:"highest-supported-os-ventura-13"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#highest-supported-os-ventura-13"}},[e._v("#")]),e._v(" Highest Supported OS: Ventura (13)*")]),e._v(" "),t("h4",{attrs:{id:"initial-supported-os-el-capitan-10-11-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initial-supported-os-el-capitan-10-11-4"}},[e._v("#")]),e._v(" Initial Supported OS: El Capitan (10.11.4)")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("macOS Ventura Note")]),e._v(" "),t("p",[e._v("macOS Ventura drops support for Skylake iGPUs. However, since Skylake and Kaby Lake iGPUs are so similar, Skylake iGPUs can be spoofed as Kaby Lake in order to make use of the Kaby Lake kexts, which are still present in Ventura. Using WhateverGreen v1.6.1 and up, change your "),t("code",[e._v("device-id")]),e._v(" and "),t("code",[e._v("AAPL,ig-platform-id")]),e._v(" to the most similar Kaby Lake model, and if using the same EFI to boot Monterey and below, add "),t("code",[e._v("-igfxsklaskbl")]),e._v(" to your boot args.")])]),e._v(" "),t("p",[e._v("Most iGPUs are supported here (excluding the HD 510), no issues to report.")]),e._v(" "),t("p",[e._v("Supported iGPUs:")]),e._v(" "),t("ul",[t("li",[e._v("HD 515")]),e._v(" "),t("li",[e._v("HD 520")]),e._v(" "),t("li",[e._v("HD 530")]),e._v(" "),t("li",[e._v("HD P530")]),e._v(" "),t("li",[e._v("Iris 540")]),e._v(" "),t("li",[e._v("Iris 550")]),e._v(" "),t("li",[e._v("Iris Pro 580")]),e._v(" "),t("li",[e._v("Iris Pro P555")]),e._v(" "),t("li",[e._v("Iris Pro P580")])]),e._v(" "),t("p",[e._v("Framebuffer:")]),e._v(" "),t("ul",[t("li",[e._v("AAPL,ig-platform-id (desktop):\n"),t("ul",[t("li",[e._v("0x19120000 (default)\n"),t("ul",[t("li",[e._v("00001219 (hex swapped)")])])]),e._v(" "),t("li",[e._v("0x19120001 (Headless)\n"),t("ul",[t("li",[e._v("01001219 (hex swapped)")])])])])]),e._v(" "),t("li",[e._v("AAPL,ig-platform-id (laptop):\n"),t("ul",[t("li",[e._v("0x19160000 (default)\n"),t("ul",[t("li",[e._v("00001619 (hex swapped)")])])])])])]),e._v(" "),t("p",[e._v("Needed kexts:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/Lilu/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lilu.kext"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("WhateverGreen.kext"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel Framebuffer Patching guide"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"kaby-lake-7xxx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kaby-lake-7xxx"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Kaby Lake 7XXX")])]),e._v(" "),t("h4",{attrs:{id:"highest-supported-os-current-ventura-13"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#highest-supported-os-current-ventura-13"}},[e._v("#")]),e._v(" Highest Supported OS: Current/Ventura (13)")]),e._v(" "),t("h4",{attrs:{id:"initial-supported-os-sierra-10-12-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initial-supported-os-sierra-10-12-6"}},[e._v("#")]),e._v(" Initial Supported OS: Sierra (10.12.6)")]),e._v(" "),t("p",[e._v("Most iGPUs are supported here, excluding the HD 610 present in the Pentium G4560.")]),e._v(" "),t("p",[e._v("Supported iGPUs:")]),e._v(" "),t("ul",[t("li",[e._v("HD 615")]),e._v(" "),t("li",[e._v("HD 620")]),e._v(" "),t("li",[e._v("HD 630")]),e._v(" "),t("li",[e._v("Iris Plus 640")]),e._v(" "),t("li",[e._v("Iris Plus 650")])]),e._v(" "),t("p",[e._v("Framebuffer:")]),e._v(" "),t("ul",[t("li",[e._v("AAPL,ig-platform-id (desktop):\n"),t("ul",[t("li",[e._v("0x59160000 (default)\n"),t("ul",[t("li",[e._v("00001659 (hex swapped)")])])]),e._v(" "),t("li",[e._v("0x59120003 (Headless)\n"),t("ul",[t("li",[e._v("03001259 (hex swapped)")])])])])]),e._v(" "),t("li",[e._v("AAPL,ig-platform-id (laptop):\n"),t("ul",[t("li",[e._v("0x591B0000 (default)\n"),t("ul",[t("li",[e._v("00001B59 (hex swapped)")])])])])])]),e._v(" "),t("p",[e._v("Needed kexts:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/Lilu/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lilu.kext"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("WhateverGreen.kext"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel Framebuffer Patching guide"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"kaby-lake-refresh-coffee-lake-coffee-lake-refresh-whiskey-lake-comet-lake-8xxx-9xxx-10xxx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kaby-lake-refresh-coffee-lake-coffee-lake-refresh-whiskey-lake-comet-lake-8xxx-9xxx-10xxx"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Kaby Lake Refresh/Coffee Lake/Coffee Lake Refresh/Whiskey Lake/Comet Lake 8XXX/9XXX/10XXX")])]),e._v(" "),t("h4",{attrs:{id:"highest-supported-os-current-ventura-13-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#highest-supported-os-current-ventura-13-2"}},[e._v("#")]),e._v(" Highest Supported OS: Current/Ventura (13)")]),e._v(" "),t("h4",{attrs:{id:"initial-supported-os-high-sierra-10-13-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initial-supported-os-high-sierra-10-13-6"}},[e._v("#")]),e._v(" Initial Supported OS: High Sierra(10.13.6)")]),e._v(" "),t("p",[e._v("Most iGPUs are supported here (except the UHD 610 in the i5-10200H), though pay attention as the "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Intel_Graphics_Technology#Kaby_Lake_Refresh_/_Amber_Lake_/_Coffee_Lake_/_Whiskey_Lake",target:"_blank",rel:"noopener noreferrer"}},[e._v("i3-8100 and i3-8350K use a different UHD 630 (184 shader units vs 192)"),t("OutboundLink")],1),e._v(" than the rest of the CPU family which requires spoofing for support in High Sierra.")]),e._v(" "),t("p",[e._v("Supported:")]),e._v(" "),t("ul",[t("li",[e._v("UHD 615")]),e._v(" "),t("li",[e._v("UHD 617")]),e._v(" "),t("li",[e._v("UHD 620")]),e._v(" "),t("li",[e._v("UHD 630")]),e._v(" "),t("li",[e._v("Iris Plus 645")]),e._v(" "),t("li",[e._v("Iris Plus 655")])]),e._v(" "),t("p",[e._v("Framebuffer:")]),e._v(" "),t("ul",[t("li",[e._v("AAPL,ig-platform-id (desktop):\n"),t("ul",[t("li",[e._v("0x3EA50000 (default)\n"),t("ul",[t("li",[e._v("0000A53E (hex swapped)")])])]),e._v(" "),t("li",[e._v("0x3E9B0007 (desktop, recommended)\n"),t("ul",[t("li",[e._v("07009B3E (hex swapped)")])])]),e._v(" "),t("li",[e._v("0x3E920003 (Headless)\n"),t("ul",[t("li",[e._v("0300923E (hex swapped)")])])])])]),e._v(" "),t("li",[e._v("AAPL,ig-platform-id (laptop):\n"),t("ul",[t("li",[e._v("0x3EA50009 (default)\n"),t("ul",[t("li",[e._v("0900A53E (hex swapped)")])])])])])]),e._v(" "),t("p",[e._v("Needed kexts:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/Lilu/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lilu.kext"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("WhateverGreen.kext"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel Framebuffer Patching guide"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"ice-lake-10xxx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ice-lake-10xxx"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Ice Lake 10XXX")])]),e._v(" "),t("h4",{attrs:{id:"highest-supported-os-current-ventura-13-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#highest-supported-os-current-ventura-13-3"}},[e._v("#")]),e._v(" Highest Supported OS: Current/Ventura (13)")]),e._v(" "),t("h4",{attrs:{id:"initial-supported-os-catalina-10-15-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initial-supported-os-catalina-10-15-4"}},[e._v("#")]),e._v(" Initial Supported OS: Catalina(10.15.4)")]),e._v(" "),t("p",[e._v('Most iGPUs present here have support (except the unsupported "UHD Graphics" G1) starting in macOS 10.15.4.')]),e._v(" "),t("p",[e._v("Supported:")]),e._v(" "),t("ul",[t("li",[e._v("Iris Plus G7")]),e._v(" "),t("li",[e._v("Iris Plus G4")])]),e._v(" "),t("p",[e._v("Framebuffer:")]),e._v(" "),t("ul",[t("li",[e._v("AAPL,ig-platform-id (laptop):\n"),t("ul",[t("li",[e._v("0x8A520000 (default)")])])])]),e._v(" "),t("p",[e._v("Needed kexts:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/Lilu/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lilu.kext"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("WhateverGreen.kext"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel FrameBuffer Patching guide"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"unsupported-intel-igpus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unsupported-intel-igpus"}},[e._v("#")]),e._v(" Unsupported Intel iGPUs")]),e._v(" "),t("p",[e._v("All GPUs listed here are GT1-based, meaning no support whatsoever.")]),e._v(" "),t("h3",{attrs:{id:"braswell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#braswell"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Braswell")])]),e._v(" "),t("h4",{attrs:{id:"highest-supported-os-none"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#highest-supported-os-none"}},[e._v("#")]),e._v(" Highest Supported OS: None")]),e._v(" "),t("p",[e._v("Unsupported:")]),e._v(" "),t("ul",[t("li",[e._v("HD 400")]),e._v(" "),t("li",[e._v("HD 405")])]),e._v(" "),t("h3",{attrs:{id:"skylake"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#skylake"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Skylake")])]),e._v(" "),t("h4",{attrs:{id:"highest-supported-os-none-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#highest-supported-os-none-2"}},[e._v("#")]),e._v(" Highest Supported OS: None")]),e._v(" "),t("p",[e._v("Unsupported:")]),e._v(" "),t("ul",[t("li",[e._v("HD 510")])]),e._v(" "),t("h3",{attrs:{id:"apollo-lake"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apollo-lake"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Apollo Lake")])]),e._v(" "),t("h4",{attrs:{id:"highest-supported-os-none-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#highest-supported-os-none-3"}},[e._v("#")]),e._v(" Highest Supported OS: None")]),e._v(" "),t("p",[e._v("Unsupported:")]),e._v(" "),t("ul",[t("li",[e._v("HD 500")]),e._v(" "),t("li",[e._v("HD 505")])]),e._v(" "),t("h3",{attrs:{id:"kaby-lake"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kaby-lake"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Kaby Lake")])]),e._v(" "),t("h4",{attrs:{id:"highest-supported-os-none-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#highest-supported-os-none-4"}},[e._v("#")]),e._v(" Highest Supported OS: None")]),e._v(" "),t("p",[e._v("Unsupported:")]),e._v(" "),t("ul",[t("li",[e._v("HD 610")])]),e._v(" "),t("h3",{attrs:{id:"kaby-lake-refresh-coffee-lake-coffee-lake-refresh-whiskey-lake-comet-lake-8xxx-9xxx-10xxx-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kaby-lake-refresh-coffee-lake-coffee-lake-refresh-whiskey-lake-comet-lake-8xxx-9xxx-10xxx-2"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Kaby Lake Refresh/Coffee Lake/Coffee Lake Refresh/Whiskey Lake/Comet Lake 8XXX/9XXX/10XXX")])]),e._v(" "),t("h4",{attrs:{id:"highest-supported-os-none-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#highest-supported-os-none-5"}},[e._v("#")]),e._v(" Highest Supported OS: None")]),e._v(" "),t("p",[e._v("Unsupported:")]),e._v(" "),t("ul",[t("li",[e._v("UHD 610")])]),e._v(" "),t("h3",{attrs:{id:"gemini-lake"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gemini-lake"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Gemini Lake")])]),e._v(" "),t("h4",{attrs:{id:"highest-supported-os-none-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#highest-supported-os-none-6"}},[e._v("#")]),e._v(" Highest Supported OS: None")]),e._v(" "),t("p",[e._v("Unsupported:")]),e._v(" "),t("ul",[t("li",[e._v("UHD 600")]),e._v(" "),t("li",[e._v("UHD 605")])]),e._v(" "),t("h3",{attrs:{id:"ice-lake-10xxx-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ice-lake-10xxx-2"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Ice Lake 10XXX")])]),e._v(" "),t("h4",{attrs:{id:"highest-supported-os-none-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#highest-supported-os-none-7"}},[e._v("#")]),e._v(" Highest Supported OS: None")]),e._v(" "),t("p",[e._v("Unsupported:")]),e._v(" "),t("ul",[t("li",[e._v("UHD Graphics (G1)")])]),e._v(" "),t("p",[e._v("The following GPUs are Xe based, with no support in "),t("strong",[e._v("any")]),e._v(" version of macOS:")]),e._v(" "),t("h3",{attrs:{id:"tiger-lake-rocket-lake"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tiger-lake-rocket-lake"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Tiger Lake/Rocket Lake")])]),e._v(" "),t("h4",{attrs:{id:"highest-supported-os-none-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#highest-supported-os-none-8"}},[e._v("#")]),e._v(" Highest Supported OS: None")]),e._v(" "),t("p",[e._v("All of the iGPUs for these CPUs are unsupported, as they are Xe based.")]),e._v(" "),t("p",[e._v("Unsupported cards include:")]),e._v(" "),t("ul",[t("li",[e._v("UHD Graphics for 11th Gen Intel Processors")]),e._v(" "),t("li",[e._v("Intel Xe Graphics")])]),e._v(" "),t("h3",{attrs:{id:"alder-lake-rocket-lake"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alder-lake-rocket-lake"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Alder Lake/Rocket Lake")])]),e._v(" "),t("h4",{attrs:{id:"highest-supported-os-none-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#highest-supported-os-none-9"}},[e._v("#")]),e._v(" Highest Supported OS: None")]),e._v(" "),t("p",[e._v("All of the iGPUs for these CPUs are unsupported, as they are Xe based.")]),e._v(" "),t("p",[e._v("Unsupported cards include:")]),e._v(" "),t("ul",[t("li",[e._v("UHD Graphics for 12th Gen Intel Processors")]),e._v(" "),t("li",[e._v("Intel Xe Graphics")])]),e._v(" "),t("h3",{attrs:{id:"raptor-lake"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raptor-lake"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Raptor Lake")])]),e._v(" "),t("h4",{attrs:{id:"highest-supported-os-none-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#highest-supported-os-none-10"}},[e._v("#")]),e._v(" Highest Supported OS: None")]),e._v(" "),t("p",[e._v("All of the iGPUs for these CPUs are unsupported, as they are Xe based.")]),e._v(" "),t("p",[e._v("Unsupported cards include:")]),e._v(" "),t("ul",[t("li",[e._v("UHD Graphics for 13th Gen Intel Processors")]),e._v(" "),t("li",[e._v("Intel Xe Graphics")])]),e._v(" "),t("h3",{attrs:{id:"discrete-gpus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#discrete-gpus"}},[e._v("#")]),e._v(" Discrete GPUs")]),e._v(" "),t("h4",{attrs:{id:"highest-supported-os-none-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#highest-supported-os-none-11"}},[e._v("#")]),e._v(" Highest Supported OS: None")]),e._v(" "),t("p",[e._v("So Intel finally made a discrete GPU. Lmao. All of them are unsupported.")]),e._v(" "),t("p",[e._v("Unsupported cards include:")]),e._v(" "),t("h5",{attrs:{id:"alchemist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alchemist"}},[e._v("#")]),e._v(" Alchemist")]),e._v(" "),t("ul",[t("li",[e._v("Arc A310")]),e._v(" "),t("li",[e._v("Arc A380")]),e._v(" "),t("li",[e._v("Arc A580")]),e._v(" "),t("li",[e._v("Arc A750")]),e._v(" "),t("li",[e._v("Arc A770 (8GB/16GB)")]),e._v(" "),t("li",[e._v("Arc A350M")]),e._v(" "),t("li",[e._v("Arc A370M")]),e._v(" "),t("li",[e._v("Arc A550M")]),e._v(" "),t("li",[e._v("Arc A730M")]),e._v(" "),t("li",[e._v("Arc A770M")]),e._v(" "),t("li",[e._v("Arc A30M")]),e._v(" "),t("li",[e._v("Arc A40")]),e._v(" "),t("li",[e._v("Arc A50")])])])}),[],!1,null,null,null);t.default=s.exports}}]);