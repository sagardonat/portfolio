from django.shortcuts import render,HttpResponse,redirect
from .models import new_contact
from django.contrib import messages
# Create your views here.
def home(request):
    if request.method == "POST":
        username = request.POST.get("name")
        company = request.POST.get("company")
        email = request.POST.get("email")
        phone = request.POST.get("phone")
        message = request.POST.get("message")
        new = new_contact(username=username,company=company,email=email,phone=phone,message=message)
        try:
            new.save()
            messages.success(request, "message sent, I will reach out to you soon.")
        except Exception as e:
            messages.error(request, "something went wrong , please send the message again.")
    return render(request, "index.html")

def about(request):
    return render(request, "about.html")
def post(request):
    return render(request, "post.html")