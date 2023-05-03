const API_KEY = ""; //ADD YOUR API_CODE
const Lat = 36.77438048625757;
const Long = -119.74808933139177;

let dataBuildings;
function InitPlaces(){
	dataBuildings = [
		//#region Multi-family
		{
			latitude : 36.77445963903519,
			longtitude : -119.7483712860261,
			name : "2834 N Jackson Ave",
			type : "Multi-family"
		},
		{
			latitude : 36.774367255850684,
			longtitude : -119.74683706252772,
			name : "4569 E Princeton Ave",
			type : "Multi-family"
		},
		//#endregion Multi-family
		
		//#region Industrial
		{
			latitude : 36.774408076341274,
			longtitude : -119.74737618651928,
			name : "4553 E Princeton Ave",
			type : "Industrial"
		},
		{
			latitude : 36.77485924873714,
			longtitude : -119.74731181350536,
			name : "4554 E Princeton Ave",
			type : "Industrial"
		},
		{
			latitude : 36.774910811127604,
			longtitude : -119.7479662724802,
			name : "4535 E Brown Ave",
			type : "Industrial"
		},
		//#endregion Industrial

		//#region Healthcare
		{
			latitude : 36.77483776439756,
			longtitude : -119.74691216437729,
			name : "4534 E Princeton Ave",
			type : "Healthcare"
		},
		{
			latitude : 36.77490006896579,
			longtitude : -119.74836323939935,
			name : "4574 E Princeton Ave",
			type : "Healthcare"
		},
		{
			latitude : 36.7752361,
			longtitude : -119.7473095,
			name : "4554 E Princeton Ave",
			type : "Healthcare"
		},
		//#endregion Healthcare


		//#region School
		{
			latitude : 36.77389889287658,
			longtitude : -119.74796090806237,
			name : "Roosevelt High School",
			type : "School"
		},
		{
			latitude : 36.7748214,
			longtitude : -119.7464378,
			name : "4575 E Brown Ave",
			type : "School"
		},
		//#endregion School

		//#region Seafood restaurant
		{
			latitude : 36.7744897172566,
			longtitude : -119.75017909486483,
			name : "Central Fish Company",
			type : "Seafood restaurant"
		},
		{
			latitude : 36.77485065500134,
			longtitude : -119.75016568382921,
			name : "Libelula",
			type : "Seafood restaurant"
		},
		//#endregion Seafood restaurant

		//#region Fast food restaurant
		{
			latitude : 36.77462506911004,
			longtitude : -119.75016836602917,
			name : "McDonald's",
			type : "Fast food restaurant"
		},
		{
			latitude : 36.775004,
			longtitude : -119.7469903,
			name : "2720 N Jackson Ave",
			type : "Fast food restaurant"
		},
		//#endregion Fast food restaurant

		//#region Apartment building
		{
			latitude : 36.7735835,
			longtitude : -119.7460193,
			name : "Coco Palms Apt.",
			type : "Apartment building"
		},
		//#endregion Apartment building

		//#region Apartment complex
		{
			latitude : 36.773972280213165,
			longtitude : -119.74843533634527,
			name : "Meridian Apartments",
			type : "Apartment complex"
		},
		{
			latitude : 36.773866,
			longtitude : -119.7471297,
			name : "4565 E Harvard Ave",
			type : "Apartment complex"
		},
		//#endregion Apartment complex

		//#region Cabinet maker
		{
			latitude : 36.7736372,
			longtitude : -119.7463465,
			name : "Willems Custom Cabinets",
			type : "Cabinet maker"
		},
		{
			latitude : 36.7738214,
			longtitude : -119.7472665,
			name : "4554 E Harvard Ave",
			type : "Cabinet maker"
		},
		{
			latitude : 36.77479,
			longtitude : -119.7462688,
			name : "4586 E Brown Ave",
			type : "Cabinet maker"
		},
		//#endregion Cabinet maker

		//#region Towing service
		{
			latitude : 36.77436081050804,
			longtitude : -119.7464749643244,
			name : "Camarena's Towing",
			type : "Towing service"
		},
		{
			latitude : 36.773692,
			longtitude : -119.7466416,
			name : "4566 E Harvard Ave",
			type : "Towing service"
		},
		//#endregion Towing service

		//#region Bathroom remodeler
		{
			latitude : 36.7735083,
			longtitude : -119.74636,
			name : "Clovis Tub & Tile Refinishing",
			type : "Bathroom remodeler"
		},
		{
			latitude : 36.7737049,
			longtitude : -119.7462097,
			name : "4584 E Harvard Ave",
			type : "Bathroom remodeler"
		},
		//#endregion Bathroom remodeler
	];
	return dataBuildings;	
}