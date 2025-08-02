// CUT START
var disableSetup = false; // Manually set to true to disable setup page menu option
var topBarCenterText = "AA4TE - EM94qg";

// Grid layout desired
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows: HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  [
    "092C5C",
    "CLUBLOG",
    "https://clublog.org/livestream/AA4TE",
    "1.7"
  ],
  [
    "092C5C",
    "CONTEST",
    "https://www.contestcalendar.com/weeklycont.php",
    "1"
  ],
  [
    "092C5C",
    "DX CLUSTER",
    "https://dxcluster.ha8tks.hu/map/",
    "1"
  ],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.82/35.49/-89.89",
    "1",
    "R"
  ],
  [
    "2196F3",
    "CoCoRaHS",
    "https://maps.cocorahs.org/",
    "1.2"
  ],
  [
    "2196F3",
    "HOURLY FORECAST",
    "https://forecast.weather.gov/MapClick.php?lat=34.259&lon=-80.5882&unit=0&lg=english&FcstType=graphical"
  ],
  [
    "2196F3",
    "Hi-Res RADAR",
    "https://moe.met.fsu.edu/~mnissenbaum/RadarArchive/MRMS2/loop.html",
    "1"
  ],
  [
    "2196F3",
    "Graphical Forecasts",
    "https://digital.weather.gov/",
    "1"
  ],
  [
    "9C33FF",
    "STUFF in SPACE",
    "https://stuffin.space/",
    "1"
  ],
  [
    "9C33FF",
    "Night Sky",
    "https://theskylive.com/planetarium#ra|11.8769075957369|dec|67.75574945363762|fov|70",
    "1"
  ],
  [
    "9C33FF",
    "Aircraft",
    "https://globe.adsbexchange.com/?lat=34.291&lon=-80.603&enableLabels&extendedLabels=1&zoom=11",
    "1"
  ],
  [
    "2196F3",
    "TIME.IS",
    "https://time.is/",
    "1",
    "R"
  ],
  [
    "2196F3",
    "VENTUSKY",
    "https://www.ventusky.com/",
    "1",
    "R"
  ],
  [
    "2196F3",
    "TEMPS",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=34.0201&lon=-80.8594&zoom=7",
    "1",
    "R"
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/grid=on/orthographic=-81.67,33.43,1055/loc=-80.591,34.509",
    "1",
    "R"
  ],
  [
    "2196F3",
    "DEW POINT",
    "https://earth.nullschool.net/#current/wind/surface/level/overlay=dew_point_temp/orthographic=-81.67,33.43,3189/loc=-68.890,35.688",
    "1",
    "R"
  ],
  [
    "2196F3",
    "3 HR ACCUMULATION",
    "https://earth.nullschool.net/#current/wind/isobaric/1000hPa/overlay=precip_3hr/orthographic=-81.67,33.43,3189/loc=-68.890,35.688",
    "1",
    "R"
  ],
  [
    "092C5C",
    "KC4RC",
    "https://qsl.net/kc4rc/",
    "1",
    "R"
  ],
  [
    "092C5C",
    "WinLink",
    "https://cms.winlink.org:444/maps/propagation.aspx",
    "1.0",
    "R"
  ],
  [
    "#6861dd",
    "SPC Mesoscale Discussions NOAA",
    "https://www.spc.noaa.gov/exper/mesoanalysis/new/viewsector.php?sector=17&parm=pmsl&underlay=1&source=1",
    "1.3",
    "R"
  ],
  [
    "#6861dd",
    "US SE CLOUD LOOP",
    "https://whirlwind.aos.wisc.edu/~wxp/goes16/vis/goes16_gulf_3h.html",
    "1",
    "R"
  ]
];

// Feed items
// Structure is as follows: target URL
// The values are [target link]
var aRSS = [
  [
    "https://www.nhc.noaa.gov/index-at.xml",
    "2"
  ],
  [
    "https://feeds.feedburner.com/breitbart",
    "10"
  ],
  [
    "https://daily.hamweekly.com/atom.xml",
    "120"
  ]
];

// Dashboard Tiles items
// Tile Structure is Title, Source URL
// To display a website on the tiles use "iframe|" keyword before the tile URL
// [Title, Source URL],
// the comma at the end is important!
var aIMG = [
  [
    "RADAR",
    "https://radar.weather.gov/ridge/standard/CONUS_loop.gif",
    "https://radar.weather.gov/ridge/standard/CONUS-LARGE_loop.gif"
  ],
  [
    "SATELLITE SE + CONUS",
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/CONUS/DayNightCloudMicroCombo/GOES19-CONUS-DayNightCloudMicroCombo-625x375.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/se/GEOCOLOR/GOES16-SE-GEOCOLOR-600x600.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/GEOCOLOR/GOES16-CONUS-GEOCOLOR-625x375.gif"
  ],
  [
    "LOCAL RADAR+",
    "https://radar.weather.gov/ridge/standard/KCAE_loop.gif",
    "https://radar.weather.gov/ridge/standard/KMKX_loop.gif",
    "https://radar.weather.gov/ridge/standard/PACNORTHWEST_loop.gif",
    "https://radar.weather.gov/ridge/standard/UPPERMISSVLY_loop.gif",
    "https://radar.weather.gov/ridge/standard/KMRX_loop.gif"
  ],
  [
    "+",
    "http://localhost:8080/get_capture.bmp"
  ],
  [
    "WPC Graphical+",
    "https://www.wpc.ncep.noaa.gov/sfc/bwsfc.gif",
    "https://www.wpc.ncep.noaa.gov/sfc/satsfcnps.gif",
    "https://www.wpc.ncep.noaa.gov/sfc/satsfc.gif",
    "https://www.wpc.ncep.noaa.gov/sfc/ussatsfc.gif"
  ],
  [
    "FORECAST/OUTLOOKS",
    "https://www.spc.noaa.gov/products/outlook/day1otlk_1300.gif",
    "https://www.wpc.ncep.noaa.gov/sfc/namsesfcwbg.gif",
    "https://x-hv1.pivotalweather.com/maps/spc/spcd2cat.conus.png",
    "https://x-hv1.pivotalweather.com/maps/mrms/latest/mrms_qpe_006h_p.conus.png",
    "https://x-hv1.pivotalweather.com/maps/mrms/latest/mrms_qpe_024h_p.conus.png"
  ],
  [
    "LIGHTNING+   HAZARDS-US",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
    "https://x-hv1.pivotalweather.com/maps/warnings/nwshaz.conus.png"
  ],
  [
    "",
    "https://www.hamqsl.com/solar101vhf.php",
    "https://www.hamqsl.com/solar100sc.php",
    "https://www.hamqsl.com/solarpich.php"
  ],
  [
    "Hurricane Lane +",
    "https://www.nhc.noaa.gov/xgtwo/two_atl_7d0.png",
    "https://www.nhc.noaa.gov/xgtwo/two_atl_2d0.png",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/taw/GEOCOLOR/GOES16-TAW-GEOCOLOR-900x540.gif"
  ],
  [
    "LIGHTNING LOCAL",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/se/EXTENT3/GOES16-SE-EXTENT3-600x600.gif"
  ],
  [
    "10M+ PROPAGATION",
    "https://www.tvcomm.co.uk/g7izu/Autosave/NA_ES_AutoSave.JPG",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png"
  ],
  [
    "Aurora Forecast+ lasco-c2 & RS-44 ",
    "https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg",
    "https://services.swpc.noaa.gov/images/animations/lasco-c2/latest.jpg",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=44909"
  ]
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, tiles will be rotated every 5000 milliseconds (5s)
var tileDelay = [
  11200,
  10000,
  11000,
  10100,
  10200,
  10500,
  10300,
  10600,
  30400,
  60700,
  60900,
  10800
];

// CUT END
