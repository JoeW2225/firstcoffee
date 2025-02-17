import { contactData } from "@/utils/contactData";

export default function ContactPage() {
  return (
    <div className="p-4 text-center">
      {contactData.map((contact) => (
        <div key={contact.id}>
          <h2 className="text-3xl p-5">{contact.title}</h2>
          <p>{contact.text}</p>
          <div className="flex flex-col justify-center p-5">
            {contact.detail.map((detail) => (
              <div key={detail.id} className="p-5">
                <p>{`${detail.name} | ${detail.tel} | ${detail.email}`}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.559290385452!2d1.2637382775705928!3d52.14233777196457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d99bd4e753f0dd%3A0x9b89720931b9897c!2sFirst.%20Coffee%20Shop!5e0!3m2!1sen!2suk!4v1739772067520!5m2!1sen!2suk"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
