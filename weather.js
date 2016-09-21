
/*

Example of weather info div:

 <div class="forecast">
 <span id="az_glendale_info"></span>
 </div>

Locations are organized alphabetically, by state, then city.
Scroll down to bottom of this page to see complete list of cities

 */

document.addEventListener("DOMContentLoaded", function(event) {


var az_glendale_weather = new XMLHttpRequest();
az_glendale_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/AZ/Glendale.json", false);
az_glendale_weather.send(null);
var az_glendale_r = JSON.parse(az_glendale_weather.response);
<!-- this is what prints to the screen/page/div -->
var  az_glendale_info =  az_glendale_r.current_observation.display_location.city+ "<br>"+ az_glendale_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  az_glendale_r.current_observation.wind_dir + ", " +  az_glendale_r.current_observation.wind_mph + " mph" + "  <br>"+ az_glendale_r.current_observation.weather + "  <p>";

var ca_la_weather = new XMLHttpRequest();
ca_la_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/CA/Los_angeles.json", false);
ca_la_weather.send(null);
var ca_la_r = JSON.parse(ca_la_weather.response);
<!-- this is what prints to the screen/page/div -->
var ca_la_info = ca_la_r.current_observation.display_location.city+ "<br>"+ca_la_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " + ca_la_r.current_observation.wind_dir + ", " + ca_la_r.current_observation.wind_mph + " mph" + "  <br>"+ca_la_r.current_observation.weather + "  <p>";

var ca_oakland_weather = new XMLHttpRequest();
ca_oakland_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/CA/Oakland.json", false);
ca_oakland_weather.send(null);
var ca_oakland_r = JSON.parse(ca_oakland_weather.response);
<!-- this is what prints to the screen/page/div -->
var  ca_oakland_info =  ca_oakland_r.current_observation.display_location.city+ "<br>"+ ca_oakland_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  ca_oakland_r.current_observation.wind_dir + ", " +  ca_oakland_r.current_observation.wind_mph + " mph" + "  <br>"+ ca_oakland_r.current_observation.weather + "  <p>";

var ca_sanDiego_weather = new XMLHttpRequest();
ca_sanDiego_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/CA/San_Diego.json", false);
ca_sanDiego_weather.send(null);
var ca_sanDiego_r = JSON.parse(ca_sanDiego_weather.response);
<!-- this is what prints to the screen/page/div -->
var  ca_sanDiego_info =  ca_sanDiego_r.current_observation.display_location.city+ "<br>"+ ca_sanDiego_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  ca_sanDiego_r.current_observation.wind_dir + ", " +  ca_sanDiego_r.current_observation.wind_mph + " mph" + "  <br>"+ ca_sanDiego_r.current_observation.weather + "  <p>";

var ca_santa_clara_weather = new XMLHttpRequest();
ca_santa_clara_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/CA/Santa_Clara.json", false);
ca_santa_clara_weather.send(null);
var ca_santa_clara_r = JSON.parse(ca_santa_clara_weather.response);
<!-- this is what prints to the screen/page/div -->
var  ca_santa_clara_info =  ca_santa_clara_r.current_observation.display_location.city+ "<br>"+ ca_santa_clara_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  ca_santa_clara_r.current_observation.wind_dir + ", " +  ca_santa_clara_r.current_observation.wind_mph + " mph" + "  <br>"+ ca_santa_clara_r.current_observation.weather + "  <p>";

var co_denver_weather = new XMLHttpRequest();
co_denver_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/CO/Denver.json", false);
co_denver_weather.send(null);
var co_denver_r = JSON.parse(co_denver_weather.response);
<!-- this is what prints to the screen/page/div -->
var  co_denver_info =  co_denver_r.current_observation.display_location.city+ "<br>"+ co_denver_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  co_denver_r.current_observation.wind_dir + ", " +  co_denver_r.current_observation.wind_mph + " mph" + "  <br>"+ co_denver_r.current_observation.weather + "  <p>";

var fl_jacksonville_weather = new XMLHttpRequest();
fl_jacksonville_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/FL/Jacksonville.json", false);
fl_jacksonville_weather.send(null);
var fl_jacksonville_r = JSON.parse(fl_jacksonville_weather.response);
<!-- this is what prints to the screen/page/div -->
var fl_jacksonville_info = fl_jacksonville_r.current_observation.display_location.city+ "<br>"+fl_jacksonville_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " + fl_jacksonville_r.current_observation.wind_dir + ", " + fl_jacksonville_r.current_observation.wind_mph + " mph" + "  <br>"+fl_jacksonville_r.current_observation.weather + "  <p>";

var fl_miami_weather = new XMLHttpRequest();
fl_miami_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/FL/Miami.json", false);
fl_miami_weather.send(null);
var fl_miami_r = JSON.parse(fl_miami_weather.response);
<!-- this is what prints to the screen/page/div -->
var  fl_miami_info =  fl_miami_r.current_observation.display_location.city+ "<br>"+ fl_miami_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  fl_miami_r.current_observation.wind_dir + ", " +  fl_miami_r.current_observation.wind_mph + " mph" + "  <br>"+ fl_miami_r.current_observation.weather + "  <p>";

var fl_tampa_weather = new XMLHttpRequest();
fl_tampa_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/FL/Tampa.json", false);
fl_tampa_weather.send(null);
var fl_tampa_r = JSON.parse(fl_tampa_weather.response);
<!-- this is what prints to the screen/page/div -->
var  fl_tampa_info =  fl_tampa_r.current_observation.display_location.city+ "<br>"+ fl_tampa_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  fl_tampa_r.current_observation.wind_dir + ", " +  fl_tampa_r.current_observation.wind_mph + " mph" + "  <br>"+ fl_tampa_r.current_observation.weather + "  <p>";

var ga_atlanta_weather = new XMLHttpRequest();
ga_atlanta_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/GA/Atlanta.json", false);
ga_atlanta_weather.send(null);
var ga_atlanta_r = JSON.parse(ga_atlanta_weather.response);
<!-- this is what prints to the screen/page/div -->
var  ga_atlanta_info =  ga_atlanta_r.current_observation.display_location.city+ "<br>"+ ga_atlanta_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  ga_atlanta_r.current_observation.wind_dir + ", " +  ga_atlanta_r.current_observation.wind_mph + " mph" + "  <br>"+ ga_atlanta_r.current_observation.weather + "  <p>";

var il_chicago_weather = new XMLHttpRequest();
il_chicago_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/IL/Chicago.json", false);
il_chicago_weather.send(null);
var il_chicago_r = JSON.parse(il_chicago_weather.response);
<!-- this is what prints to the screen/page/div -->
var  il_chicago_info =  ca_santa_clara_r.current_observation.display_location.city+ "<br>"+ il_chicago_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  il_chicago_r.current_observation.wind_dir + ", " +  il_chicago_r.current_observation.wind_mph + " mph" + "  <br>"+ il_chicago_r.current_observation.weather + "  <p>";

var in_indianapolis_weather = new XMLHttpRequest();
in_indianapolis_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/IN/Indianapolis.json", false);
in_indianapolis_weather.send(null);
var in_indianapolis_r = JSON.parse(in_indianapolis_weather.response);
<!-- this is what prints to the screen/page/div -->
var  in_indianapolis_info =  in_indianapolis_r.current_observation.display_location.city+ "<br>"+ in_indianapolis_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  in_indianapolis_r.current_observation.wind_dir + ", " +  in_indianapolis_r.current_observation.wind_mph + " mph" + "  <br>"+ in_indianapolis_r.current_observation.weather + "  <p>";

var la_newOrleans_weather = new XMLHttpRequest();
la_newOrleans_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/70112.json", false);
la_newOrleans_weather.send(null);
var la_newOrleans_r = JSON.parse(la_newOrleans_weather.response);
<!-- this is what prints to the screen/page/div -->
var  la_newOrleans_info =  la_newOrleans_r.current_observation.display_location.city+ "<br>"+ la_newOrleans_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  la_newOrleans_r.current_observation.wind_dir + ", " +  la_newOrleans_r.current_observation.wind_mph + " mph" + "  <br>"+ la_newOrleans_r.current_observation.weather + "  <p>";

var ma_foxboro_weather = new XMLHttpRequest();
ma_foxboro_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/MA/Foxboro.json", false);
ma_foxboro_weather.send(null);
var ma_foxboro_r = JSON.parse(ma_foxboro_weather.response);
<!-- this is what prints to the screen/page/div -->
var  ma_foxboro_info =  ma_foxboro_r.current_observation.display_location.city+ "<br>"+ ma_foxboro_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  ma_foxboro_r.current_observation.wind_dir + ", " +  ma_foxboro_r.current_observation.wind_mph + " mph" + "  <br>"+ ma_foxboro_r.current_observation.weather + "  <p>";

var md_baltimore_weather = new XMLHttpRequest();
md_baltimore_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/MD/Baltimore.json", false);
md_baltimore_weather.send(null);
var md_baltimore_r = JSON.parse(md_baltimore_weather.response);
<!-- this is what prints to the screen/page/div -->
var  md_baltimore_info =  md_baltimore_r.current_observation.display_location.city+ "<br>"+ md_baltimore_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  md_baltimore_r.current_observation.wind_dir + ", " +  md_baltimore_r.current_observation.wind_mph + " mph" + "  <br>"+ md_baltimore_r.current_observation.weather + "  <p>";

var md_landover_weather = new XMLHttpRequest();
md_landover_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/MD/Landover.json", false);
md_landover_weather.send(null);
var md_landover_r = JSON.parse(md_landover_weather.response);
<!-- this is what prints to the screen/page/div -->
var md_landover_info = md_landover_r.current_observation.display_location.city+ "<br>"+md_landover_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " + md_landover_r.current_observation.wind_dir + ", " + md_landover_r.current_observation.wind_mph + " mph" + "  <br>"+md_landover_r.current_observation.weather + "  <p>";

var mi_detroit_weather = new XMLHttpRequest();
mi_detroit_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/MI/Detroit.json", false);
mi_detroit_weather.send(null);
var mi_detroit_r = JSON.parse(mi_detroit_weather.response);
<!-- this is what prints to the screen/page/div -->
var  mi_detroit_info =  mi_detroit_r.current_observation.display_location.city+ "<br>"+ mi_detroit_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  mi_detroit_r.current_observation.wind_dir + ", " +  mi_detroit_r.current_observation.wind_mph + " mph" + "  <br>"+ mi_detroit_r.current_observation.weather + "  <p>";

var mn_minneapolis_weather = new XMLHttpRequest();
mn_minneapolis_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/MN/Minneapolis.json", false);
mn_minneapolis_weather.send(null);
var mn_minneapolis_r = JSON.parse(mn_minneapolis_weather.response);
<!-- this is what prints to the screen/page/div -->
var  mn_minneapolis_info =  mn_minneapolis_r.current_observation.display_location.city+ "<br>"+ mn_minneapolis_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  mn_minneapolis_r.current_observation.wind_dir + ", " +  mn_minneapolis_r.current_observation.wind_mph + " mph" + "  <br>"+ mn_minneapolis_r.current_observation.weather + "  <p>";

var mo_kc_weather = new XMLHttpRequest();
mo_kc_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/MO/Kansas_City.json", false);
mo_kc_weather.send(null);
var mo_kc_r = JSON.parse(mo_kc_weather.response);
<!-- this is what prints to the screen/page/div -->
var mo_kc_info = mo_kc_r.current_observation.display_location.city+ "<br>"+mo_kc_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " + mo_kc_r.current_observation.wind_dir + ", " + mo_kc_r.current_observation.wind_mph + " mph" + "  <br>"+mo_kc_r.current_observation.weather + "  <p>";

var nc_charlotte_weather = new XMLHttpRequest();
nc_charlotte_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/NC/Charlotte.json", false);
nc_charlotte_weather.send(null);
var nc_charlotte_r = JSON.parse(nc_charlotte_weather.response);
<!-- this is what prints to the screen/page/div -->
var nc_charlotte_info = nc_charlotte_r.current_observation.display_location.city+ "<br>"+nc_charlotte_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " + nc_charlotte_r.current_observation.wind_dir + ", " + nc_charlotte_r.current_observation.wind_mph + " mph" + "  <br>"+nc_charlotte_r.current_observation.weather + "  <p>";

var nj_rutherford_weather = new XMLHttpRequest();
nj_rutherford_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/NJ/Rutherford.json", false);
nj_rutherford_weather.send(null);
var nj_rutherford_r = JSON.parse(nj_rutherford_weather.response);
<!-- this is what prints to the screen/page/div -->
var  nj_rutherford_info =  nj_rutherford_r.current_observation.display_location.city+ "<br>"+ nj_rutherford_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  nj_rutherford_r.current_observation.wind_dir + ", " +  nj_rutherford_r.current_observation.wind_mph + " mph" + "  <br>"+ nj_rutherford_r.current_observation.weather + "  <p>";

var ny_buffalo_weather = new XMLHttpRequest();
ny_buffalo_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/NY/Buffalo.json", false);
ny_buffalo_weather.send(null);
var ny_buffalo_r = JSON.parse(ny_buffalo_weather.response);
<!-- this is what prints to the screen/page/div -->
var  ny_buffalo_info =  ny_buffalo_r.current_observation.display_location.city+ "<br>"+ ny_buffalo_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  ny_buffalo_r.current_observation.wind_dir + ", " +  ny_buffalo_r.current_observation.wind_mph + " mph" + "  <br>"+ ny_buffalo_r.current_observation.weather + "  <p>";

var oh_cincinnati_weather = new XMLHttpRequest();
oh_cincinnati_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/OH/Cincinnati.json", false);
oh_cincinnati_weather.send(null);
var oh_cincinnati_r = JSON.parse(oh_cincinnati_weather.response);
<!-- this is what prints to the screen/page/div -->
var  oh_cincinnati_info =  oh_cincinnati_r.current_observation.display_location.city+ "<br>"+ oh_cincinnati_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  oh_cincinnati_r.current_observation.wind_dir + ", " +  oh_cincinnati_r.current_observation.wind_mph + " mph" + "  <br>"+ oh_cincinnati_r.current_observation.weather + "  <p>";

var oh_cleveland_weather = new XMLHttpRequest();
oh_cleveland_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/OH/Cleveland.json", false);
oh_cleveland_weather.send(null);
var oh_cleveland_r = JSON.parse(oh_cleveland_weather.response);
<!-- this is what prints to the screen/page/div -->
var oh_cleveland_info = oh_cleveland_r.current_observation.display_location.city+ "<br>"+oh_cleveland_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " + oh_cleveland_r.current_observation.wind_dir + ", " + oh_cleveland_r.current_observation.wind_mph + " mph" + "  <br>"+oh_cleveland_r.current_observation.weather + "  <p>";

var pa_phila_weather = new XMLHttpRequest();
pa_phila_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/PA/Philadelphia.json", false);
pa_phila_weather.send(null);
var pa_phila_r = JSON.parse(pa_phila_weather.response);
<!-- this is what prints to the screen/page/div -->
var  pa_phila_info =  pa_phila_r.current_observation.display_location.city+ "<br>"+ pa_phila_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  pa_phila_r.current_observation.wind_dir + ", " +  pa_phila_r.current_observation.wind_mph + " mph" + "  <br>"+ pa_phila_r.current_observation.weather + "  <p>";

var pa_pitts_weather = new XMLHttpRequest();
pa_pitts_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/PA/Pittsburgh.json", false);
pa_pitts_weather.send(null);
var pa_pitts_r = JSON.parse(pa_pitts_weather.response);
<!-- this is what prints to the screen/page/div -->
var  pa_pitts_info =  pa_pitts_r.current_observation.display_location.city+ "<br>"+ pa_pitts_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  pa_pitts_r.current_observation.wind_dir + ", " +  pa_pitts_r.current_observation.wind_mph + " mph" + "  <br>"+ pa_pitts_r.current_observation.weather + "  <p>";

var tn_nashville_weather = new XMLHttpRequest();
tn_nashville_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/TN/Nashville.json", false);
tn_nashville_weather.send(null);
var tn_nashville_r = JSON.parse(tn_nashville_weather.response);
<!-- this is what prints to the screen/page/div -->
var  tn_nashville_info =  tn_nashville_r.current_observation.display_location.city+ "<br>"+ tn_nashville_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  tn_nashville_r.current_observation.wind_dir + ", " +  tn_nashville_r.current_observation.wind_mph + " mph" + "  <br>"+ tn_nashville_r.current_observation.weather + "  <p>";

var tx_arlington_weather = new XMLHttpRequest();
tx_arlington_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/TX/Arlington.json", false);
tx_arlington_weather.send(null);
var tx_arlington_r = JSON.parse(tx_arlington_weather.response);
<!-- this is what prints to the screen/page/div -->
var tx_arlington_info = tx_arlington_r.current_observation.display_location.city+ "<br>"+tx_arlington_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " + tx_arlington_r.current_observation.wind_dir + ", " + tx_arlington_r.current_observation.wind_mph + " mph" + "  <br>"+tx_arlington_r.current_observation.weather + "  <p>";

var tx_dallas_weather = new XMLHttpRequest();
tx_dallas_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/TX/Dallas.json", false);
tx_dallas_weather.send(null);
var tx_dallas_r = JSON.parse(tx_dallas_weather.response);
<!-- this is what prints to the screen/page/div -->
var tx_dallas_info = tx_dallas_r.current_observation.display_location.city+ "<br>"+tx_dallas_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " + tx_dallas_r.current_observation.wind_dir + ", " + tx_dallas_r.current_observation.wind_mph + " mph" + "  <br>"+tx_dallas_r.current_observation.weather + "  <p>";

var tx_houston_weather = new XMLHttpRequest();
tx_houston_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/TX/Houston.json", false);
tx_houston_weather.send(null);
var tx_houston_r = JSON.parse(tx_houston_weather.response);
<!-- this is what prints to the screen/page/div -->
var  tx_houston_info =  tx_houston_r.current_observation.display_location.city+ "<br>"+ tx_houston_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  tx_houston_r.current_observation.wind_dir + ", " +  tx_houston_r.current_observation.wind_mph + " mph" + "  <br>"+ tx_houston_r.current_observation.weather + "  <p>";

var wa_seattle_weather = new XMLHttpRequest();
wa_seattle_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/WA/Seattle.json", false);
wa_seattle_weather.send(null);
var wa_seattle_r = JSON.parse(wa_seattle_weather.response);
<!-- this is what prints to the screen/page/div -->
var wa_seattle_info = wa_seattle_r.current_observation.display_location.city+ "<br>"+wa_seattle_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " + wa_seattle_r.current_observation.wind_dir + ", " + wa_seattle_r.current_observation.wind_mph + " mph" + "  <br>"+wa_seattle_r.current_observation.weather + "  <p>";

var wi_greenbay_weather = new XMLHttpRequest();
wi_greenbay_weather.open("GET", "http://api.wunderground.com/api/6b9c104e07787d1a/conditions/q/WI/Green_Bay.json", false);
wi_greenbay_weather.send(null);
var wi_greenbay_r = JSON.parse(wi_greenbay_weather.response);
<!-- this is what prints to the screen/page/div -->
var  wi_greenbay_info =  wi_greenbay_r.current_observation.display_location.city+ "<br>"+ wi_greenbay_r.current_observation.temp_f + "&#8457  <br>"+"Wind: " +  wi_greenbay_r.current_observation.wind_dir + ", " +  wi_greenbay_r.current_observation.wind_mph + " mph" + "  <br>"+ wi_greenbay_r.current_observation.weather + "  <p>";

/* Function */
function getWeather(id, res) {
    document.getElementById(id).innerHTML = res;
}

/*Function calls */
getWeather("az_glendale_info",  az_glendale_info);
getWeather("ca_la_info",  ca_la_info);
getWeather("ca_oakland_info",  ca_oakland_info);
getWeather("ca_sanDiego_info",  ca_sanDiego_info);
getWeather("ca_santa_clara_info",  ca_santa_clara_info);
getWeather("co_denver_info",  co_denver_info);
getWeather("fl_jacksonville_info", fl_jacksonville_info);
getWeather("fl_miami_info",  fl_miami_info);
getWeather("fl_tampa_info",  fl_tampa_info);
getWeather("ga_atlanta_info",  ga_atlanta_info);
getWeather("il_chicago_info",  il_chicago_info);
getWeather("in_indianapolis_info",  in_indianapolis_info);
getWeather("la_newOrleans_info",  la_newOrleans_info);
getWeather("ma_foxboro_info",  ma_foxboro_info);
getWeather("md_baltimore_info",  md_baltimore_info);
getWeather("md_landover_info", md_landover_info);
getWeather("mi_detroit_info",  mi_detroit_info);
getWeather("mn_minneapolis_info",  mn_minneapolis_info);
getWeather("mo_kc_info", mo_kc_info);
getWeather("nc_charlotte_info", nc_charlotte_info);
getWeather("nj_rutherford_info",  nj_rutherford_info);
getWeather("ny_buffalo_info",  ny_buffalo_info);
getWeather("oh_cincinnati_info",  oh_cincinnati_info);
getWeather("oh_cleveland_info", oh_cleveland_info);
getWeather("pa_phila_info",  pa_phila_info);
getWeather("pa_pitts_info",  pa_pitts_info);
getWeather("tn_nashville_info",  tn_nashville_info);
getWeather("tx_arlington_info", tx_arlington_info);
getWeather("tx_dallas_info", tx_dallas_info);
getWeather("tx_houston_info",  tx_houston_info);
getWeather("wa_seattle_info", wa_seattle_info);
getWeather("wi_greenbay_info",  wi_greenbay_info);
/* end function calls */
});