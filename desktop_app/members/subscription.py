# subscription.py
"""
Handles subscription logic for PHILATELY-AI Desktop App.
"""

class SubscriptionManager:
    def __init__(self):
        self.is_subscribed = False
        self.plan = None  # 'monthly' or 'yearly'

    def subscribe(self, plan):
        # Placeholder for payment integration
        if plan in ['monthly', 'yearly']:
            self.is_subscribed = True
            self.plan = plan
            print(f"Subscribed to {plan} plan.")
        else:
            print("Invalid plan.")

    def cancel_subscription(self):
        self.is_subscribed = False
        self.plan = None
        print("Subscription cancelled.")
