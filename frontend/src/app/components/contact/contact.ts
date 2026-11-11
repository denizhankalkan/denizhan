import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SITE } from '../../content/site.content';
import { ContactService } from '../../services/contact.service';

type SendState = 'idle' | 'sending' | 'sent' | 'failed';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly contact = SITE.contact;
  protected readonly state = signal<SendState>('idle');
  /** Field errors show only after the first attempt to send. */
  protected readonly tried = signal(false);

  private readonly contactService = inject(ContactService);

  protected readonly form = inject(FormBuilder).nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(160)]],
    message: ['', [Validators.required, Validators.maxLength(2000)]],
    website: [''],
  });

  protected invalid(field: 'name' | 'email' | 'message'): boolean {
    return this.tried() && this.form.controls[field].invalid;
  }

  protected submit(): void {
    this.tried.set(true);
    if (this.form.invalid || this.state() === 'sending') return;

    this.state.set('sending');
    this.contactService.send(this.form.getRawValue()).subscribe({
      next: () => {
        this.state.set('sent');
        this.tried.set(false);
        this.form.reset();
      },
      error: () => this.state.set('failed'),
    });
  }
}
