db.authors.updateOne(
      { "name" : "Nataly" },
      { $set: { "second-name" : "Nerovnya" } }
   );