using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace netcoreapp.Controllers.Api
{
    [Route("api/test")]
    [ApiController]
    public class TestController : Controller
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[]
            {
                "value1",
                "value2"
            };
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