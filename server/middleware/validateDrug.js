// middleware/validateDrug.js
function validateDrug(req, res, next) {
  const { name, dosage, card, pack, perDay } = req.body;

  // (a) Name > 5 ký tự
  if (!name || name.length <= 5) {
    return res.status(400).json({ error: "Name must be longer than 5 characters" });
  }

  // (b) Dosage format: XX-morning,XX-afternoon,XX-night
  const dosageRegex = /^\d{2}-morning,\d{2}-afternoon,\d{2}-night$/;
  if (!dosageRegex.test(dosage)) {
    return res.status(400).json({ error: "Dosage must follow format: XX-morning,XX-afternoon,XX-night" });
  }

 // (c) Card > 1000
const cardValue = parseInt(card, 10);
if (isNaN(cardValue) || cardValue <= 1000) {
  return res.status(400).json({ error: "Card must be greater than 1000" });
}
 // (d) Pack > 0
const packValue = parseInt(pack, 10);
if (isNaN(packValue) || packValue <= 0) {
  return res.status(400).json({ error: "Pack must be more than 0" });
}


  // (e) PerDay > 0 && < 90
const perDayValue = parseInt(perDay, 10);
if (isNaN(perDayValue) || perDayValue <= 0 || perDayValue >= 90) {
  return res.status(400).json({ error: "PerDay must be between 1 and 89" });
}


  next();
}

module.exports = validateDrug;
