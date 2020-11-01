/**
 * Conversions for volume.
 * @private
 */
export const volume = {
	//#region SI
	'cubic meter': {ratio: 1},
	'cubic meters': {ratio: 1},
	'cubic metre': {ratio: 1},
	'cubic metres': {ratio: 1},
	'm³': {ratio: 1},
	m3: {ratio: 1},

	'cubic kilometer': {ratio: 1e3},
	'cubic kilometre': {ratio: 1e3},
	'cubic kilometers': {ratio: 1e3},
	'cubic kilometres': {ratio: 1e3},
	'km³': {ratio: 1e3},
	km3: {ratio: 1e3},

	'cubic hectometer': {ratio: 1e6},
	'cubic hectometre': {ratio: 1e6},
	'cubic hectometers': {ratio: 1e6},
	'cubic hectometres': {ratio: 1e6},
	'hm³': {ratio: 1e6},
	hm3: {ratio: 1e6},

	'cubic decameter': {ratio: 10},
	'cubic decametre': {ratio: 10},
	'cubic decameters': {ratio: 10},
	'cubic decametres': {ratio: 10},
	'dam³': {ratio: 10},
	dam3: {ratio: 10},

	'cubic decimeter': {ratio: 1e-1},
	'cubic decimetre': {ratio: 1e-1},
	'cubic decimeters': {ratio: 1e-1},
	'cubic decimetres': {ratio: 1e-1},
	'dm³': {ratio: 1e-1},
	dm3: {ratio: 1e-1},

	'cubic centimeter': {ratio: 1e-2},
	'cubic centimetre': {ratio: 1e-2},
	'cubic centimeters': {ratio: 1e-2},
	'cubic centimetres': {ratio: 1e-2},
	'cm³': {ratio: 1e-2},
	cc: {ratio: 1e-2},
	cm3: {ratio: 1e-2},

	'cubic millimeter': {ratio: 1e-3},
	'cubic millimetre': {ratio: 1e-3},
	'cubic millimeters': {ratio: 1e-3},
	'cubic millimetres': {ratio: 1e-3},
	'mm³': {ratio: 1e-3},
	mm3: {ratio: 1e-3},
	//#endregion

	//#region non-SI metric
	gigaliter: {ratio: 1e6},
	gigalitre: {ratio: 1e6},
	gigaliters: {ratio: 1e6},
	gigalitres: {ratio: 1e6},
	Gl: {ratio: 1e6},
	GL: {ratio: 1e6},

	megaliter: {ratio: 1e6},
	megalitre: {ratio: 1e6},
	megaliters: {ratio: 1e6},
	megalitres: {ratio: 1e6},
	Ml: {ratio: 1e6},
	ML: {ratio: 1e6},

	kiloliter: {ratio: 1e3},
	kilolitre: {ratio: 1e3},
	kiloliters: {ratio: 1e3},
	kilolitres: {ratio: 1e3},
	kl: {ratio: 1e3},
	kL: {ratio: 1e3},

	hectoliter: {ratio: 1e5},
	hectolitre: {ratio: 1e5},
	hectoliters: {ratio: 1e5},
	hectolitres: {ratio: 1e5},
	hl: {ratio: 1e5},
	hL: {ratio: 1e5},

	decaliter: {ratio: 1e4},
	decalitre: {ratio: 1e4},
	decaliters: {ratio: 1e4},
	decalitres: {ratio: 1e4},
	dal: {ratio: 1e4},
	daL: {ratio: 1e4},

	liter: {ratio: 0.001},
	litre: {ratio: 0.001},
	liters: {ratio: 0.001},
	litres: {ratio: 0.001},
	l: {ratio: 0.001},
	L: {ratio: 0.001},

	deciliter: {ratio: 0.0001},
	decilitre: {ratio: 0.0001},
	deciliters: {ratio: 0.0001},
	decilitres: {ratio: 0.0001},
	dl: {ratio: 0.0001},
	dL: {ratio: 0.0001},

	centiliter: {ratio: 1e5},
	centilitre: {ratio: 1e5},
	centiliters: {ratio: 1e5},
	centilitres: {ratio: 1e5},
	cl: {ratio: 1e5},
	cL: {ratio: 1e5},

	milliliter: {ratio: 1e6},
	millilitre: {ratio: 1e6},
	milliliters: {ratio: 1e6},
	millilitres: {ratio: 1e6},
	ml: {ratio: 1e6},
	mL: {ratio: 1e6},

	microliter: {ratio: 1e9},
	microlitre: {ratio: 1e9},
	microliters: {ratio: 1e9},
	microlitres: {ratio: 1e9},
	μl: {ratio: 1e9},
	μL: {ratio: 1e9},

	stere: {ratio: 1},
	steres: {ratio: 1},
	//#endregion

	//#region Imperial & US customary
	'cubic mile': {ratio: 4.2e3},
	'cubic miles': {ratio: 4.2e3},
	'cu mi': {ratio: 4.2e3},
	cumi: {ratio: 4.2e3},
	mi3: {ratio: 4.2e3},

	'acre foot': {ratio: 1233.48183754752},
	'acre feet': {ratio: 1233.48183754752},
	'acre⋅ft': {ratio: 1233.48183754752},
	'acre ft': {ratio: 1233.48183754752},

	'cubic yard': {ratio: 0.76},
	'cubic yards': {ratio: 0.76},
	'cu yd': {ratio: 0.76},
	cuyd: {ratio: 0.76},
	yd3: {ratio: 0.76},

	'cubic foot': {ratio: 0.028},
	'cubic feet': {ratio: 0.028},
	'cu ft': {ratio: 0.028},
	cuft: {ratio: 0.028},
	ft3: {ratio: 0.028},
	cufoot: {ratio: 0.028},
	foot3: {ratio: 0.028},

	'board foot': {ratio: 0.002359737},
	'board feet': {ratio: 0.002359737},

	'cubic inch': {ratio: 1.6e-1},
	'cubic inches': {ratio: 1.6e-1},
	'cu in': {ratio: 1.6e-1},
	cuin: {ratio: 1.6e-1},
	in3: {ratio: 1.6e-1},

	'measurement ton': {ratio: 1.2},
	'measurement tons': {ratio: 1.2},
	MTON: {ratio: 1.2},
	//#endregion

	//#region Imperial
	'imperial barrel': {ratio: 160},
	'imperial barrels': {ratio: 160},
	'imp bbl': {ratio: 160},
	impbbl: {ratio: 160},

	kilderkin: {ratio: 160},
	kilderkins: {ratio: 160},

	firkin: {ratio: 160},
	firkins: {ratio: 160},

	'imperial bushel': {ratio: 160},
	'imperial bushels': {ratio: 160},
	'imp bsh': {ratio: 160},
	'imp bu': {ratio: 160},
	impbsh: {ratio: 160},
	impbu: {ratio: 160},

	'imperial kenning': {ratio: 18},
	'imperial kennings': {ratio: 18},
	kenning: {ratio: 18},
	impkenning: {ratio: 18},

	'imperial peck': {ratio: 9.1},
	'imperial pecks': {ratio: 9.1},
	pk: {ratio: 9.1},
	imppk: {ratio: 9.1},

	'imperial quart': {ratio: 1.1},
	'imperial quarts': {ratio: 1.1},
	'imp qt': {ratio: 1.1},
	impqt: {ratio: 1.1},

	'imperial gallon': {ratio: 1 / 219.9692},
	'imperial gallons': {ratio: 1 / 219.9692},
	'imp gal': {ratio: 1 / 219.9692},
	impgal: {ratio: 1 / 219.9692},

	'imperial pint': {ratio: 0.57},
	'imperial pints': {ratio: 0.57},
	'imp pt': {ratio: 0.57},
	imppt: {ratio: 0.57},

	gill: {ratio: 4.8},
	gills: {ratio: 4.8},
	gi: {ratio: 4.8},
	impgi: {ratio: 4.8},

	'imperial fluid ounce': {ratio: 123},
	'imperial fluid ounces': {ratio: 123},
	'imp fl oz': {ratio: 123},
	impoz: {ratio: 123},
	//#endregion

	//#region US customary liquid measure
	'US barrel': {ratio: 0.164},
	'US barrels': {ratio: 0.164},
	'US bbl': {ratio: 0.164},
	'U.S. bbl': {ratio: 0.164},
	USbbl: {ratio: 0.164},
	usbbl: {ratio: 0.164},
	'U.S.bbl': {ratio: 0.164},

	barrel: {ratio: 1 / 6.2898},
	barrels: {ratio: 1 / 6.2898},
	bbl: {ratio: 1 / 6.2898},
	oilbbl: {ratio: 1 / 6.2898},

	'US beer barrel': {ratio: 0.117},
	'US beer barrels': {ratio: 0.117},
	USbeerbbl: {ratio: 0.117},
	usbeerbbl: {ratio: 0.117},
	'U.S.beerbbl': {ratio: 0.117},

	'US gallon': {ratio: 1 / 264.1721},
	'US gallons': {ratio: 1 / 264.1721},
	'US gal': {ratio: 1 / 264.1721},
	'U.S. gal': {ratio: 1 / 264.1721},
	USgal: {ratio: 1 / 264.1721},
	usgal: {ratio: 1 / 264.1721},
	'U.S.gal': {ratio: 1 / 264.1721},

	'US quart': {ratio: 9.46352946e-4},
	'US quarts': {ratio: 9.46352946e-4},
	'US qt': {ratio: 9.46352946e-4},
	'U.S. qt': {ratio: 9.46352946e-4},
	USqt: {ratio: 9.46352946e-4},
	usqt: {ratio: 9.46352946e-4},
	'U.S.qt': {ratio: 9.46352946e-4},

	'US pint': {ratio: 4.73176473e8},
	'US pints': {ratio: 4.73176473e8},
	'US pt': {ratio: 4.73176473e8},
	'U.S. pt': {ratio: 4.73176473e8},
	USpt: {ratio: 4.73176473e8},
	uspt: {ratio: 4.73176473e8},
	'U.S.pt': {ratio: 4.73176473e8},

	'US gill': {ratio: 1.18e8},
	'US gills': {ratio: 1.18e8},
	USgi: {ratio: 1.18e8},
	usgi: {ratio: 1.18e8},
	'U.S.gi': {ratio: 1.18e8},

	'US fluid ounce': {ratio: 29.5735295625e6},
	'US fluid ounces': {ratio: 29.5735295625e6},
	'US fl oz': {ratio: 29.5735295625e6},
	USoz: {ratio: 29.5735295625e6},
	USflox: {ratio: 29.5735295625e6},
	usoz: {ratio: 29.5735295625e6},
	usfloz: {ratio: 29.5735295625e6},
	'U.S.oz': {ratio: 29.5735295625e6},
	'U.S.floz': {ratio: 29.5735295625e6},
	//#endregion

	//#region US customary dry measure
	'US dry barrel': {ratio: 0.12},
	'US dry barrels': {ratio: 0.12},
	'US dry bbl': {ratio: 0.12},
	'U.S. dry bbl': {ratio: 0.12},
	USdrybbl: {ratio: 0.12},
	usdrybbl: {ratio: 0.12},
	drybbl: {ratio: 0.12},
	'U.S.drybbl': {ratio: 0.12},

	'US bushel': {ratio: 3.52391e-2},
	'US bushels': {ratio: 3.52391e-2},
	'US bsh': {ratio: 3.52391e-2},
	'U.S. bsh': {ratio: 3.52391e-2},
	USbsh: {ratio: 3.52391e-2},
	usbsh: {ratio: 3.52391e-2},
	'U.S.bsh': {ratio: 3.52391e-2},
	'US bu': {ratio: 3.52391e-2},
	'U.S. bu': {ratio: 3.52391e-2},
	USbu: {ratio: 3.52391e-2},
	usbu: {ratio: 3.52391e-2},
	'U.S.bu': {ratio: 3.52391e-2},

	'US kenning': {ratio: 0.12},
	'US kennings': {ratio: 0.12},
	'U.S. kenning': {ratio: 0.12},
	USkenning: {ratio: 0.12},
	'U.S.kenning': {ratio: 0.12},
	uskenning: {ratio: 0.12},

	'US peck': {ratio: 9.09218e-3},
	'US pk': {ratio: 9.09218e-3},
	'U.S. pk': {ratio: 9.09218e-3},
	Uspk: {ratio: 9.09218e-3},
	uspk: {ratio: 9.09218e-3},
	'U.S.pk': {ratio: 9.09218e-3},

	'US dry gallon': {ratio: 4.40488377086e-3},
	'US dry gal': {ratio: 4.40488377086e-3},
	'U.S. dry gal': {ratio: 4.40488377086e-3},
	USdrygal: {ratio: 4.40488377086e-3},
	usdrygal: {ratio: 4.40488377086e-3},
	drygal: {ratio: 4.40488377086e-3},
	'U.S.drygal': {ratio: 4.40488377086e-3},

	'US dry quart': {ratio: 0.946352946e-3},
	'US dry qt': {ratio: 0.946352946e-3},
	'U.S. dry qt': {ratio: 0.946352946e-3},
	USdryqt: {ratio: 0.946352946e-3},
	usdryqt: {ratio: 0.946352946e-3},
	dryqt: {ratio: 0.946352946e-3},
	'U.S.dryqt': {ratio: 0.946352946e-3},

	'US dry pint': {ratio: 33.6003125},
	'US dry pt': {ratio: 33.6003125},
	'U.S. dry pt': {ratio: 33.6003125},
	USdrypt: {ratio: 33.6003125},
	'U.S.drypt': {ratio: 33.6003125},
	usdrypt: {ratio: 33.6003125},
	drypt: {ratio: 33.6003125}
	//#endregion
};