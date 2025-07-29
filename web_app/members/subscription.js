// subscription.js
// Handles subscription logic for PHILATELY-AI Web App.

export class SubscriptionManager {
  constructor() {
    this.isSubscribed = false;
    this.plan = null; // 'monthly' or 'yearly'
  }

  subscribe(plan) {
    // Placeholder for payment integration
    if (plan === 'monthly' || plan === 'yearly') {
      this.isSubscribed = true;
      this.plan = plan;
      console.log(`Subscribed to ${plan} plan.`);
    } else {
      console.log('Invalid plan.');
    }
  }

  cancelSubscription() {
    this.isSubscribed = false;
    this.plan = null;
    console.log('Subscription cancelled.');
  }
}
