db.grades.aggregate([
    { $unwind: "$scores" },
    { $match: { $or: [ {"scores.type": "homework"}, {"scores.type":"exam"} ] } },
    { $group: { _id: { 'student_id': "$student_id", 'class_id': "$class_id" }, avg: { $avg: "$scores.score" } } },
    { $group: { _id: "$_id.class_id", class_average: { $avg: "$avg" } } },
    { $sort: { 'class_average': -1 } },
	{ $limit : 1 }
])