#!/bin/bash

# extract `AllSetFiles.zip` and then run this to map to reasonably sized JSON files for each set
for file in *.json; do
  cat $file | jq '. | { booster: .boosterV3, name: .name, code: .code, totalSetSize: .totalSetSize, cards: [.cards[] | { name: .name, uuid: .uuid, cmc: .convertedManaCost, rarity: .rarity, color: {colors: .colors, colorIdentity: .colorIdentity}, type: {types: .types, subtypes: .subtypes, supertypes: .supertypes}}]}' > $file.slim
  filename=$(basename $file.slim .json.slim)  
  mv $file.slim $filename.slim.json
done

