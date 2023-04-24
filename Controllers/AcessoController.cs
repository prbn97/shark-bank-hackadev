using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using sharp_coders_hackadev.Data;
using sharp_coders_hackadev.Models;

namespace sharp_coders_hackadev.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AcessoController : ControllerBase
    {
        private readonly SharkBankDbContext _context;

        public AcessoController(SharkBankDbContext context)
        {
            _context = context;
        }

        // GET: api/Acesso
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Acesso>>> GetAcessos()
        {
            return await _context.Acessos.ToListAsync();
        }

        // GET: api/Acesso/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Acesso>> GetAcesso(string id)
        {
            var acesso = await _context.Acessos.FindAsync(id);

            if (acesso == null)
            {
                return NotFound();
            }

            return acesso;
        }

        // PUT: api/Acesso/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAcesso(string id, Acesso acesso)
        {
            if (id != acesso.Id)
            {
                return BadRequest();
            }

            _context.Entry(acesso).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AcessoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Acesso
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Acesso>> PostAcesso(Acesso acesso)
        {
            _context.Acessos.Add(acesso);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AcessoExists(acesso.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetAcesso", new { id = acesso.Id }, acesso);
        }

        // DELETE: api/Acesso/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAcesso(string id)
        {
            var acesso = await _context.Acessos.FindAsync(id);
            if (acesso == null)
            {
                return NotFound();
            }

            _context.Acessos.Remove(acesso);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AcessoExists(string id)
        {
            return _context.Acessos.Any(e => e.Id == id);
        }
    }
}
