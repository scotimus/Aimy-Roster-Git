//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AimyRoster.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Staffs
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int SiteId { get; set; }
        public string SiteName { get; set; }
    
        public virtual Sites Sites { get; set; }
    }
}
