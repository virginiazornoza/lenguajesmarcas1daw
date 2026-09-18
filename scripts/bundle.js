// scripts/bundle.js
const fs = require('fs');
const path = require('path');

const curriculum = fs.readFileSync(path.join(__dirname, '../js/data/curriculum.js'), 'utf8')
  .replace(/export const/g, 'const');

const unit1 = fs.readFileSync(path.join(__dirname, '../js/data/units/unit1.js'), 'utf8')
  .replace(/export const/g, 'const');

const unitsOverview = fs.readFileSync(path.join(__dirname, '../js/data/units/unitsOverview.js'), 'utf8')
  .replace(/export const/g, 'const');

const validator = fs.readFileSync(path.join(__dirname, '../js/parser-validator.js'), 'utf8')
  .replace(/export class/g, 'class');

const quizEngine = fs.readFileSync(path.join(__dirname, '../js/quiz-engine.js'), 'utf8')
  .replace(/export class/g, 'class');

const appJs = fs.readFileSync(path.join(__dirname, '../js/app.js'), 'utf8')
  .replace(/import .*;?\n/g, '');

const combined = `
(function() {
${curriculum}

${unit1}

${unitsOverview}

${validator}

${quizEngine}

${appJs}
})();
`;

fs.writeFileSync(path.join(__dirname, '../js/bundle.js'), combined, 'utf8');
console.log('Bundle generated successfully in js/bundle.js');
