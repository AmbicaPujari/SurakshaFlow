const state = {
  name: "Demo User",
  platform: "Zomato",
  city: "Vijayawada",
  zone: "moderate",
  income: 4500,
  hours: 8,
  upi: "worker@upi",
  premium: 35,
  coverage: 900,
  risk: "Medium"
};

function goTo(screenId){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

function generatePlan(){
  state.name = document.getElementById('name').value || "Demo User";
  state.income = Number(document.getElementById('income').value) || 4500;

  state.premium = 35;
  document.getElementById('workerNamePlan').textContent = state.name;
  document.getElementById('planPrice').textContent = "₹" + state.premium;

  goTo('screen-plan');
}

function activatePlan(){
  document.getElementById('dashName').textContent = state.name;
  document.getElementById('dashPremium').textContent = "₹" + state.premium;

  goTo('screen-dashboard');
}
