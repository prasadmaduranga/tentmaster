
var priceList = {
//  camping tent prices
	four_person_single_layer_tent : "5500",
	six_person_single_layer_tent : "7500",
	four_person_double_layer_tent : "11000",
	four_person_double_layer_tent_type2 : "9000",
	
	coleman_2person_tent : "14800",
	coleman_4person_tent : "21500",
	coleman_6person_tent : "32500",
	coleman_octagon_person_tent : "115000",
	
	patrol_tent_8x7_5 : "16500",
	patrol_tent_10x7 : "21500",
	patrol_tent_10x10x6 : "22500",
	patrol_tent_10x10x7 : "24500",
	rover_cabin_small : "36000",
	rover_cabin_large : "42000",
	
//	canopy tent prices
	powder_coated_6x6 : "8200",
	powder_coated_10x10 : "9400",
	
	steel_tent_6x6 : "9400",
	steel_tent_10x10 : "11000",
	steel_tent_10x15 : "15000",
	
	white_steel_tent_10x10 : "14500",
	white_steel_tent_10x15 : "20000",
	white_steel_tent_10x20 : "28500",
	
	high_grade_steel_tent_10x10 : "25000",
	high_grade_steel_tent_10x15 : "36000",
	high_grade_steel_tent_10x20 : "47000",
	
	gi_pipe_tent_10x10 : "24000",
	gi_pipe_tent_10x15 : "35000",
	gi_pipe_tent_10x20 : "46000",
	
	canopy_cloth : "4500",
	vehicle_parking_shade_8 : "45000",
	vehicle_parking_shade_10 : "55000",
	
	//camping accessories
	backpack_type1 : "9250",
	backpack_type2 : "9250",
	
	butane_gas_canister : "450",
	camping_air_bed_small : "3800",
	camping_air_bed_large : "4800",
	camping_gas_stove : "3200",
	camping_mini_gas_stove : "1600",
	camping_lamp : "2100",
	
	hammock_type1 : "1700",
	hammock_type2 : "2200",
	hammock_type3 : "3400",
	
	sleeping_bag_type1 : "2200",
	sleeping_bag_type2 : "3750",
	
	coleman_4d_led_lantern : "4900",
	coleman_8d_led_lantern : "7900",
	coleman_backpack : "9850",
	coleman_gas_stove_type1 : "6700",
	coleman_gas_stove_type2 : "22000",
	coleman_gas_stove_type3 : "4500",
	coleman_duo_lantern : "9700",
	coleman_li_iron_rechargeable_lantern : "11300",
	coleman_sleeping_bag_type1 : "9600",
	coleman_sleeping_bag_type2 : "7500",

    //	rent prices
	four_person_single_layer_tent_rent : "500",
	six_person_single_layer_tent_rent : "700",
	four_person_double_layer_tent_rent : "700",
	patrol_tent_rent : "2000",
	camping_gas_stove_rent : "500",
	bongo_rent : "200",
	camping_lantern_rent : "200",
	
	// Umbrella tent prices
	umbrella_tent_type1 : "2900",
	umbrella_tent_type2 : "3900",
	teak_umbrella_tent : "40000",
	steel_umbrella_tent : "6400",
	steel_wide_umbrella_tent : "9600",
	wooden_umbrella_tent : "7800",
	side_pole_umbrella_tent : "13000",
	parasol_umbrella_tent_7x7 : "9900",
	parasol_umbrella_tent_8x8 : "13400",
	base_type1 : "3000",
	base_type2 : "4000"
};

$(document).ready(function() {
	$(".four_person_single_layer_tent_price").text(priceList["four_person_single_layer_tent"]);
	$(".six_person_single_layer_tent_price").text(priceList["six_person_single_layer_tent"]);
	$(".four_person_double_layer_tent_price").text(priceList["four_person_double_layer_tent"]);
	$(".four_person_double_layer_tent_type2_price").text(priceList["four_person_double_layer_tent_type2"]);
	$(".coleman_2person_tent_price").text(priceList["coleman_2person_tent"]);
	$(".coleman_4person_tent_price").text(priceList["coleman_4person_tent"]);
	$(".coleman_6person_tent_price").text(priceList["coleman_6person_tent"]);
	$(".coleman_octagon_person_tent_price").text(priceList["coleman_octagon_person_tent"]);
	$(".patrol_tent_8x7_5_price").text(priceList["patrol_tent_8x7_5"]);
	$(".patrol_tent_10x7_price").text(priceList["patrol_tent_10x7"]);
	$(".patrol_tent_10x10x6_price").text(priceList["patrol_tent_10x10x6"]);
	$(".patrol_tent_10x10x7_price").text(priceList["patrol_tent_10x10x7"]);
	$(".rover_cabin_small_price").text(priceList["rover_cabin_small"]);
	$(".rover_cabin_large_price").text(priceList["rover_cabin_large"]);
	
	$(".powder_coated_6x6_price").text(priceList["powder_coated_6x6"]);
	$(".powder_coated_10x10_price").text(priceList["powder_coated_10x10"]);
	$(".steel_tent_6x6_price").text(priceList["steel_tent_6x6"]);
	$(".steel_tent_10x10_price").text(priceList["steel_tent_10x10"]);
	$(".steel_tent_10x15_price").text(priceList["steel_tent_10x15"]);
	$(".white_steel_tent_10x10_price").text(priceList["white_steel_tent_10x10"]);
	$(".white_steel_tent_10x15_price").text(priceList["white_steel_tent_10x15"]);
	$(".white_steel_tent_10x20_price").text(priceList["white_steel_tent_10x20"]);
	$(".high_grade_steel_tent_10x10_price").text(priceList["high_grade_steel_tent_10x10"]);
	$(".high_grade_steel_tent_10x15_price").text(priceList["high_grade_steel_tent_10x15"]);
	$(".high_grade_steel_tent_10x20_price").text(priceList["high_grade_steel_tent_10x20"]);
	$(".gi_pipe_tent_10x10_price").text(priceList["gi_pipe_tent_10x10"]);
	$(".gi_pipe_tent_10x15_price").text(priceList["gi_pipe_tent_10x15"]);
	$(".gi_pipe_tent_10x20_price").text(priceList["gi_pipe_tent_10x20"]);
	$(".canopy_cloth_price").text(priceList["canopy_cloth"]);
	$(".vehicle_parking_shade_8_price").text(priceList["vehicle_parking_shade_8"]);
	$(".vehicle_parking_shade_10_price").text(priceList["vehicle_parking_shade_10"]);
	
	$(".backpack_type1_price").text(priceList["backpack_type1"]);
	$(".backpack_type2_price").text(priceList["backpack_type2"]);
	$(".butane_gas_canister_price").text(priceList["butane_gas_canister"]);
	$(".camping_air_bed_price_small").text(priceList["camping_air_bed_small"]);
	$(".camping_air_bed_price_large").text(priceList["camping_air_bed_large"]);
	$(".camping_gas_stove_price").text(priceList["camping_gas_stove"]);
	$(".camping_mini_gas_stove_price").text(priceList["camping_mini_gas_stove"]);
	$(".camping_lamp_price").text(priceList["camping_lamp"]);
	$(".hammock_type1_price").text(priceList["hammock_type1"]);
	$(".hammock_type2_price").text(priceList["hammock_type2"]);
	$(".hammock_type3_price").text(priceList["hammock_type3"]);
	$(".sleeping_bag_type1_price").text(priceList["sleeping_bag_type1"]);
	$(".sleeping_bag_type2_price").text(priceList["sleeping_bag_type2"]);
	$(".coleman_4d_led_lantern_price").text(priceList["coleman_4d_led_lantern"]);
	$(".coleman_8d_led_lantern_price").text(priceList["coleman_8d_led_lantern"]);
	$(".coleman_backpack_price").text(priceList["coleman_backpack"]);
	$(".coleman_gas_stove_type1_price").text(priceList["coleman_gas_stove_type1"]);
	$(".coleman_gas_stove_type2_price").text(priceList["coleman_gas_stove_type2"]);
	$(".coleman_gas_stove_type3_price").text(priceList["coleman_gas_stove_type3"]);
	$(".coleman_li_iron_rechargeable_lantern_price").text(priceList["coleman_li_iron_rechargeable_lantern"]);
	$(".coleman_sleeping_bag_type1_price").text(priceList["coleman_sleeping_bag_type1"]);
	$(".coleman_sleeping_bag_type2_price").text(priceList["coleman_sleeping_bag_type2"]);
	
	$(".umbrella_tent_type1_price").text(priceList["umbrella_tent_type1"]);
	$(".umbrella_tent_type2_price").text(priceList["umbrella_tent_type2"]);
	$(".teak_umbrella_tent_price").text(priceList["teak_umbrella_tent"]);
	$(".steel_umbrella_tent_price").text(priceList["steel_umbrella_tent"]);
	$(".steel_wide_umbrella_tent_price").text(priceList["steel_wide_umbrella_tent"]);
	$(".wooden_umbrella_tent_price").text(priceList["wooden_umbrella_tent"]);
	$(".side_pole_umbrella_tent_price").text(priceList["side_pole_umbrella_tent"]);
	$(".parasol_umbrella_tent_7x7_price").text(priceList["parasol_umbrella_tent_7x7"]);
	$(".parasol_umbrella_tent_8x8_price").text(priceList["parasol_umbrella_tent_8x8"]);
	$(".base_type1_price").text(priceList["base_type1"]);
	$(".base_type2_price").text(priceList["base_type2"]);
	
	$(".four_person_single_layer_tent_rent_price").text(priceList["four_person_single_layer_tent_rent"]);
	$(".six_person_single_layer_tent_rent_price").text(priceList["six_person_single_layer_tent_rent"]);
	$(".four_person_double_layer_tent_rent_price").text(priceList["four_person_double_layer_tent_rent"]);
	$(".patrol_tent_rent_price").text(priceList["patrol_tent_rent"]);
	$(".camping_gas_stove_rent_price").text(priceList["camping_gas_stove_rent"]);
	$(".bongo_rent_price").text(priceList["bongo_rent"]);
	$(".camping_lantern_rent_price").text(priceList["camping_lantern_rent"]);
	
});
