using System.Collections.Generic;
using System.IO;
using netcoreapp.Models;
using Newtonsoft.Json;

namespace netcoreapp.Repository
{
    public class MagicSetRepository
    {
        public IList<MagicCard> GetMagicSet()
        {
            var cards = JsonConvert.DeserializeObject<IList<MagicCard>>(File.ReadAllText(@"./AllSetFiles/BFZ.json"));

            return cards;
        }
    }
}