function normalizeUnits(manifest){
   if(manifest.unit==="lb"){
    const weight=manifest.weight*0.45
    return{...manifest,weight:weight,unit:"kg"}
    
  }
  if(manifest.unit==="kg"){
    return{...manifest}
  }
}
function validateManifest(manifest){
  let validatedManifest={}
    if (manifest===null||manifest===undefined||manifest=== ""||typeof manifest!=="object"){
    validatedManifest.containerId="Missing"
    validatedManifest.destination="Missing"
    validatedManifest.weight="Missing"
    validatedManifest.unit="Missing"
    validatedManifest.hazmat="Missing"
  }


 if(manifest.containerId===undefined||manifest.containerId===""){
  validatedManifest.containerId="Missing"
}
else if(manifest.containerId<1||!Number.isInteger(manifest.containerId)||manifest.containerId===null){
  validatedManifest.containerId="Invalid"}
if(manifest.destination===""||manifest.destination===null||manifest.destination===undefined){
  validatedManifest.destination="Missing"}
  else if(typeof manifest.destination!=="string"||String(manifest.destination).trim()===""){
    validatedManifest.destination="Invalid"
  }
if (manifest.weight===null||manifest.weight===undefined||manifest.weight===""){
    validatedManifest.weight="Missing"
  }
  else if(manifest.weight<=0||Number.isNaN(manifest.weight)){
    validatedManifest.weight="Invalid"
  }
if(manifest.unit===""||manifest.unit===null||manifest.unit===undefined){
    validatedManifest.unit="Missing"
  }
  else if(typeof manifest.unit!=="string"||!(manifest.unit==="kg"||manifest.unit==="lb")){
    validatedManifest.unit="Invalid"
  }
if (manifest.hazmat===null||manifest.hazmat===undefined){
    validatedManifest.hazmat="Missing"
  }
  else if(typeof manifest.hazmat!=="boolean"){
    validatedManifest.hazmat="Invalid"
  }
return validatedManifest
}
function processManifest(manifest){
  const validatedManifest=validateManifest(manifest)
  if(Object.keys(validatedManifest).length===0){
    const normalizedManifest=normalizeUnits(manifest)
    console.log(`Validation success: ${manifest.containerId}`)
    console.log(`Total weight: ${normalizedManifest.weight} kg`)
  }
  else{
    console.log(`Validation error: ${manifest.containerId}`)
    console.log(validatedManifest)
}}

