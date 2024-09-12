# PreBilt v4 Release Notes

## v4.12.0
### Improvements
#### Frontend
##### Functional
- New icons through font-awesome upgrade
- New carousel with faster load times and optimized focus 
- New option to suppress carousel altogether 
- New PWA icons 
- Display profile specific defaults for font styles/sizes 
- Extended version infos to show plugin & device data 
##### Technical
- Unified font loading across Platforms 
- Using View Modules instead of JSViews 
- New factory concept for SAPStandardScreen Screen Elements 
- Capacitor: Build Apps to run against SAP System URL to avoid CORS 
- Cleanup and extension of settings.json parameters 
- Image plugin (display & capture) re-write to avoid Capacitor/Cordova 
- Extension Point change: 
  - `handleParsedResponse`: new parameter `rawSAPData`
  - new exit for `SAPStandardScreen` Extensions: `adjustControlAfterCreation`
- Library Updates 
  - openUI5 v1.108 (from v1.84) 
  - ui5-cli v3 (from v2) 
  - Updated font-awesome to v6.4 (from v5.13) 
  - Capacitor 5 (from Capacitor 4)   
- Tooling & Platforms 
  - Deployment scripts moved to ES Modules 
  - New capacitor-sync build & deployment (capacitor without Android build) 
  - New fiori-libs build & deployment (builds UI5 libraries and deploys to BSP MIME) 
  - `capacitor-sync` & `capacitor-dev` significantly accelerated by moving UI5 libs to avoid copying 
  - Unified line endings to LF only 
  - Plugin installation scripts 
#### Backend
##### Functional
- Lydia Voice Integration 
- Voice Check Digits - Monitor Node Extension to show Shape Digits for Storage Bin 
- Show submenu name in menu screen header 
- Carousel: Setup for "Do not use carousel"  
- New setup helpers 
- Base customizing installer 
- Cordova APC Cross Origin Installer 
##### Technical
- Voice Check Digits - improved error handling 
- Menu input field on menu screen provided (not displayed) 
- Language as parameters for all data selections 
- Admin: User information node 
- ICF Node setup unification 
- Additional websocket functions 
- Quick sending of message toasts to frontend
### Bug Fixes
#### Frontend
- Device UUIDs in capacitor not set correctly 
- Neptune: Handle strings in settings that exceed neptune maximum file length (e.g. license keys) 
- Neptune: Show version infos on triple-click 
- Fixed logic to calculate the element spreading per row (some combinations yielded sums <> 12) 
#### Backend
- List Item conversion exit outputs could cause dumps because of OUTPUT field data type 
- Ensure reading customizing with real LTRANS, not simulated 
- Unloading Transaction Exception Codes Missing 
- Ensure correct list of function codes according to presentation/personalization profile 
- Vocollect VDERP: Voice language key not considered in message overrides 

## v4.11.0
### Communication Hub
- Two way messaging between SAP and mobile devices 
#### Backend
- Configuration and master data transactions 
- Warehouse monitor node 

## v4.10.0
### Improvements
#### Frontend
##### Functional
- Single Sign-On Support
##### Technical
- Enhanced Movilizer build commands 
- Refactored & streamlined PWA builds 
- Unified PWA & Fiori Path Settings with general approach 
#### Backend
##### Functional
- Enhanced Voice Tooling for Check Digits & Generation 
- Additional Data Entry Mode to support Multi-modal devices (screen & voice) 
- Vocollect: New ONLY_ONCE Input Condition 
- Receiving Unified Search: Indexing of multiple deliveries of same PO 
- Receiving Unified Search: Barcode parsing during input 
##### Technical
- Additional PRE-Flow BAdI enhancements
- Single Sign-On Support and unified ICF handling 
### Bug Fixes 
#### Frontend 
- Websocket handler extension function callout 
- Logout switch to login screen not quick enough 
- Movilizer: Ensure login settings are cleared during build 
#### Backend 
- Ensure TEXT fields are not overriding INPUT boxes during customizing generation 
- Handling of control ASCII control characters (e.g. GS) in ITS template code 

## v4.9.1
### Improvements
#### Frontend Technical 
- New `after dialog` handler 
#### Tooling & Platforms 
- Enhanced Fiori with PWA build capability. 
- Fiori font loader. 
- Updated the Capacitor Plugin Build System Webpack integration for latest webpack release. 
- Unified deploy.conf for login settings. 
- Capacitor with 9-patch splash screens. 
#### Backend Technical 
- New PreBilt Event handler (e.g. “Warehouse Set”) for Services/Apps to consume via BAdI `/TCTM/IF_EX_EWM_BASE_EVENT`. 
- Gamification: Use of this new Event handler. 
- Voice Language Settings on Display Profile. 
- PWA Manifest Handler. 
### Bug Fixes
#### Frontend
- Bugfix for double posts to SAP. 
- Bugfix for Carousel - focus after render. 
- Bugfix for setting cursor at end of text box. 
- Bugfix for OK Codes on Question Message Screens. 
- Bugfix for RETAIN_VALUES to handle non-standard screens and incorrect backend configuration. 
#### Backend 
- Receiving: Ensure correct item is selected for receipt (if multiple valid ones exist). 
- Gamification:
  - Handle missing number range object gracefully. 
  - Make sure THRESHOLD competition participants that are FINISHED have FINISHED_AT set. 
  - Ensure any ACTIVE participants have the SCORE_UNIT set. 

## v4.9.0
### Improvements
#### Frontend
##### Functional
- HU Receiving - New ‘Select Item’ screen which provides a searchable list of all expected delivery items with their total requested qty, open GR and unpacked qty. Selecting an item populates the data into the packing screen.
- HU Receiving - New ‘Unified Search’ logical transaction to search across deliveries, POs and ASNs. 
- New UoM selection dialogs with enhanced UI and enriched data including packing quantities per UoM. 
- Integration of Scandit Libraries via Capacitor. 
- Focus fields with existing text at end of text. 
##### Technical
- UI5 library update to 1.84 
- Build Capacitor plugins into UI5 components via webpack 
- Capacitor Icon generator updates 
- TCT Preflight Service Node to handle CORS and PNA 
- New enhancement spot: Handle SAP Failures in Plugin 
- New App License Handling on frontend 
#### Backend
##### Functional
- UoM Selection Dialogs
- Receiving Unified Search
- Receiving Document Overview
- App installer - warn when overriding existing prefix
- Adding exception shortcuts in Receiving Transaction
##### Technical
- Realtime communication - handle message from front-end via BAdI 
- Handle Installed Apps in TCTC RFUI Framework 
- Licenses with packages 
- Merging field parameters and extra element parameters (if same name)
### Known Limitations
- HU Receiving - New ‘Select Item’ Screen  
  - Does not update quantities correctly for concurrent users processing the same deliveries.
  - Incorrect item packing can occur in deliveries with duplicate products.

## v4.8.0
### Improvements
- TCTM App installer. - Use with Analytics App 
- Display profile-specific data in/out and generators. 
- Extra element types and display profile settings moved to separate customising transaction `/TCTM/EWM_CUST`.
- Vocollect Voice framework introduced.
- Initial RF template function group.
- Licenses for individual packages.
- Automatic display profile selection from frontend.
### Bug Fixes
#### Frontend
- UOM issues in conversion exits for list box values.  
- Fixed dumps on fresh installs. 
- Ensure valid JSON if two PreBilt requests are sent in quick succession.
#### Backend
- Neptune Generator only installed into STMP. 
- Bugfixes for step loop tables on frontend: capture data, handle focus. 
- Technical Details - FCodes on Kebab menu button.

## v4.7.0
### Improvements
- Improved login error handling. 
- Screen configuration grid scale increased to 12 from 10 - allows for precise handling of rows with 1, 2, 3, 4 and 6 equal sized items 
### Bug Fixes
- Message screen capturing of answers.

## v4.6.0
### Improvements
- Enhanced message screen display.
- Message information in the technical information dialog.
- Improved placement of swipe indicators for mobile and desktop. 
### Bug Fixes
- List box handling when key and text are different. 
- Login controller error handling. 

## v4.2.0
### Improvements
- Swipe-to-scroll functionality. 
- Additional focus handling options (focus / no focus / focus without keyboard). 
- Change of available field types. 
- Timeout settings TCode /EWM/SETTINGS. 

## v4.1.0
### Improvements
- Embedded KPIs (ability to place KPI tiles inside any transaction step).
- Text size configuration amended from pixel-based values e.g. `10px` to text-based values e.g. `NORMAL`, `LARGE`
- `Line Group` renamed as `Row`

## v4.0.0
### Improvements
- Image capture and display.
- Option to display text without border.
- Improved function key display.
- Logical transaction inserted in configuration menu tree – improved performance.
- Function code extras.
- Exception code extras.