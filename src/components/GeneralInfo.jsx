import Input from "./Input";
import DataField from "./DataField";

export default function GeneralInfo({
  isEditingGeneralInfo,
  generalInfoHandler,
  generalInfo,
}) {
  if (isEditingGeneralInfo) {
    return (
      <div className="general">
        <Input
          type="text"
          label="name"
          placeholder="Your name here"
          onChange={generalInfoHandler}
          data={generalInfo}
        />
        <Input
          type="email"
          label="email address"
          placeholder="someone@example.com"
          onChange={generalInfoHandler}
          data={generalInfo}
        />
        <Input
          type="tel"
          label="phone number"
          placeholder="Your phone number"
          onChange={generalInfoHandler}
          data={generalInfo}
        />
      </div>
    );
  }

  return (
    <div className="general">
      <DataField label="name" data={generalInfo.name} />
      <DataField label="email address" data={generalInfo.email} />
      <DataField label="phone number" data={generalInfo.phone} />
    </div>
  );
}
