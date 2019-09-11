using System;
using System.Collections;
using System.Collections.Generic;

namespace netcoreapp.Models
{
    public class MagicSet
    {
        //public string Block { get; set; }
        public IEnumerable<string> Booster { get; set; }
        public IEnumerable<MagicCard> Cards { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        //public DateTimeOffset ReleaseDate { get; set; }
        public int TotalSetSize { get; set; }
    }
}