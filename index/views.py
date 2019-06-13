from django.shortcuts import render
from .forms import ContactForm
from .models import Contact


def index(request):
    form = ContactForm()
    msg = ''
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            obj = Contact()
            obj.name = form.cleaned_data['name']
            obj.email = form.cleaned_data['email']
            obj.subject = form.cleaned_data['subject']
            obj.message = form.cleaned_data['message']
            obj.save()
            form = ContactForm()
            msg = 'Email Sent'
            pass
    return render(request, 'index.html', {'form': form, 'msg': msg})


