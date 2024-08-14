"use client";
import { useImmer } from "use-immer";

/** ★ は e.target.nameが動的のため追加・修正 */
type FormType = {
  name: string;
  address: {
    [key: string]: string; // ★
  };
  contact: {
    [key: string]: string; // ★
  };
  [key: string]: string | { [key: string]: string }; // ★
};

export default function Page() {
  const [form, setForm] = useImmer<FormType>({
    name: "",
    address: {
      prefecture: "",
      city: "",
    },
    contact: {
      tel: "",
      email: "",
    },
  });

  /** form.name 更新 */
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((draft) => {
      draft[e.target.name] = e.target.value;
    });
  };

  /** form.address 更新（...form での展開不要） */
  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((draft) => {
      draft.address[e.target.name] = e.target.value;
    });
  };

  /** form.contact 更新（...form での展開不要） */
  const handleChangeContact = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((draft) => {
      draft.contact[e.target.name] = e.target.value;
    });
  };

  /** form 送信 */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.table(form);
  };

  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>名前</label>
          <div>
            <input name="name" type="text" onChange={handleChangeName} />
          </div>
        </div>
        <fieldset className="fieldset">
          <legend>Address</legend>
          <div className="form-group">
            <label>都道府県</label>
            <div>
              <input
                name="prefecture"
                type="text"
                onChange={handleChangeAddress}
              />
            </div>
          </div>
          <div className="form-group">
            <label>市区町村</label>
            <div>
              <input name="city" type="text" onChange={handleChangeAddress} />
            </div>
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <legend>Contact</legend>
          <div className="form-group">
            <label>電話番号</label>
            <div>
              <input name="tel" type="text" onChange={handleChangeContact} />
            </div>
          </div>
          <div className="form-group">
            <label>メールアドレス</label>
            <div>
              <input name="email" type="text" onChange={handleChangeContact} />
            </div>
          </div>
        </fieldset>
        <div className="button-group">
          <button type="submit">送信</button>
        </div>
      </form>
    </main>
  );
}
