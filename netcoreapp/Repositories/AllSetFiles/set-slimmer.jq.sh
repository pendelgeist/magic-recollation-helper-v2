#!/bin/bash

for file in BFZ.json; do
  cat $file | jq '. | { booster: .boosterV3, name: .name, code: .code, totalSetSize: .totalSetSize, cards: [.cards[] | { name: .name, uuid: .uuid, cmc: .convertedManaCost, rarity: .rarity, color: {colors: .colors, colorIdentity: .colorIdentity}, type: {types: .types, subtypes: .subtypes, supertypes: .supertypes}}]}' > $file.slim
  #cat $file | jq '.cards | { cards: { name: .name, uuid: .uuid, cmc: .convertedManaCost, rarity: .rarity, color: {colors: .colors, colorIdentity: .colorIdentity}, type: {types: .types, subtypes: .subtypes, supertypes: .supertypes}

  #ghead -n -1 $file.slim.1 > $file.slim;
  #echo "," >> $file.slim;
  #tail -n +2 $file.slim.2 >> $file.slim;
  #rm $file.slim.1 $file.slim.2;
done

