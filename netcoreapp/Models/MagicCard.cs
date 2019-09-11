using System.Collections;
using System.Collections.Generic;

namespace netcoreapp.Models
{
    public abstract class MagicCard
    {
        //public IEnumerable<string> ColorIdentity { get; set; }
        //public IEnumerable<string> Colors{ get; set; }
        public decimal ConvertedManaCost { get; set;  }
        public string Name { get; set; }
        public string Rarity { get; set; }
        //public IEnumerable<string> SubTypes { get; set; }
        //public IEnumerable<string> Types { get; set; }

    }
}