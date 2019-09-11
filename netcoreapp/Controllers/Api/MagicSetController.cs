using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using netcoreapp.Models;
using Newtonsoft.Json;

namespace netcoreapp.Controllers.Api
{
    [Route("api/magic-set")]
    [ApiController]
    public class MagicSetController : Controller
    {
        [HttpGet]
        public MagicSet Get()
        {
            var set = JsonConvert.DeserializeObject<MagicSet>(BFZ.Json);
            return set ;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<int> Get(int id) => id;

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}