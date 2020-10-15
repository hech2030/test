﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using DataAcess;
using Microsoft.AspNetCore.Mvc;
using MyTeam.Common.Requests.bo.Users;

namespace MyTeam.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FOURNISSEURsController : ControllerBase
    {
        readonly SolarThermalEntities ArtDetails;
        public FOURNISSEURsController(SolarThermalEntities FOURNISSEURContext)
        {
            ArtDetails = FOURNISSEURContext;
        }

        [HttpPost]
        [Route("FindFOURNISSEUR")]
        public IActionResult findFOURNISSEUR(FOURNISSEURFindRequest request)
        {
            IEnumerable<FOURNISSEUR> data;
            if (request.id > 0)
            {
                 data = (from a in ArtDetails.FOURNISSEUR
                                .Include("ARTICLE")
                                .Include("COMMANDE")
                               select a).Where(a => a.Id == request.id);
            }
            else
            {
                 data = (from a in ArtDetails.FOURNISSEUR
                                .Include("ARTICLE")
                                .Include("COMMANDE")
                            select a);
            }
            return Ok(new { result = data.ToList() });
        }

        [HttpPost]
        public IActionResult Post([FromBody] FOURNISSEUR obj)
        {
            var data = ArtDetails.FOURNISSEUR.Add(obj);
            ArtDetails.SaveChanges();
            return Ok(new { success = true });
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] FOURNISSEUR obj)
        {
            var data = ArtDetails.FOURNISSEUR.Update(obj);
            ArtDetails.SaveChanges();
            return Ok(new { success = true });
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            bool success = false;
            try
            {
                var data = ArtDetails.FOURNISSEUR.Where(a => a.Id == id).FirstOrDefault();
                ArtDetails.FOURNISSEUR.Remove(data);
                ArtDetails.SaveChanges();
                return Ok(new { success = true });
            }
            catch (Exception ex)
            {
                Console.Write("Exception : " + ex.Message);
                return BadRequest(new { success });
            }
        }
    }
}

