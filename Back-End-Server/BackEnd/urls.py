from django.urls import path
from .Views import viewsAgent, viewsBuy, viewsRent, viewsSignUp, viewsLogin

urlpatterns = [
    path('agents', viewsAgent.AgentsApi.as_view(), name="agents"),
    path('agents/<int:id>/', viewsAgent.AgentsPut.as_view(), name="agents"),
    path('buying', viewsBuy.CreateBuyViews.as_view(), name="buying"),
    path('buying/<int:id>/', viewsBuy.BuyPut.as_view(), name="buying"),
    path('renting',viewsRent.CreateRentViews.as_view(), name="renting"),
    path('renting/<int:id>/', viewsRent.RentPut.as_view(), name="renting"),
    path('signup', viewsSignUp.SignUpView.as_view(), name="signup"),
    path('login', viewsLogin.login(), name="login"),
    
]
