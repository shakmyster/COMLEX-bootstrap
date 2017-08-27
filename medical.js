// acidemia-alkalemia calculator
	function acid_base(pH){
  	if(pH < 7.35){
    	return "Acidemia";
    } else if(pH > 7.45){
    	return "Alkalemia";
    } else 
    	return "normal";
  }
document.getElementById('demo1').innerHTML = acid_base(7.44);

// determine if Respiratory or metabolic acid-base
function acid_base_two(pH, bicarb, co2){
		if (pH > 7.45 && bicarb > 28 && co2 > 45){
  		return "Metabolic alkalosis";
    } else if (pH > 7.45 && bicarb < 18 && co2 < 35){
  			return "Respiratory alkalosis";
    } else if (pH < 7.35 && bicarb < 18 && co2 < 35){
  			return "Metabolic acidosis";
  	} else if (pH < 7.35 && bicarb > 28 && co2 > 45){
  			return "Respiratory acidosis";
    } else if (pH >= 7.35 || pH <= 7.45 && bicarb >= 18 || bicarb <= 28 && co2 <= 45 || co2 >= 35){
      		return "normal";
    } else return "try again";
}

document.getElementById("demo2").innerHTML = acid_base_two(7.6, 15, 30);

// Anion gap calculator
function anion_gap(Na, Cl, bicarb){
	var anionMath = (Na - (Cl + bicarb));
  if (anionMath > 16){
  	return "high Anion gap";
  } else if(anionMath < 12){
  	return "reassess";
  } else return "within normal range";  
}

document.getElementById("demo3").innerHTML = anion_gap(145, 110, 23);

//



