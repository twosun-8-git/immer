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

  /** 共通のonChangeハンドラ */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const keys = name.split(".");

    setForm((draft) => {
      // トップレベルのプロパティの更新
      if (keys.length === 1) {
        draft[keys[0]] = value;
      }
      // ネストされたオブジェクトのプロパティの更新
      else {
        // parentKey: address | contact
        // childKey: prefecture | city | tel | email
        const [parentKey, childKey] = keys;

        // parentKey が draft に存在し、object 型であることを確認
        if (parentKey in draft && typeof draft[parentKey] === "object") {
          draft[parentKey][childKey] = value;
        }
      }
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
            <input name="name" type="text" onChange={handleChange} />
          </div>
        </div>
        <fieldset className="fieldset">
          <legend>Address</legend>
          <div className="form-group">
            <label>都道府県</label>
            <div>
              <input
                name="address.prefecture"
                type="text"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>市区町村</label>
            <div>
              <input name="address.city" type="text" onChange={handleChange} />
            </div>
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <legend>Contact</legend>
          <div className="form-group">
            <label>電話番号</label>
            <div>
              <input name="contact.tel" type="text" onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label>メールアドレス</label>
            <div>
              <input name="contact.email" type="text" onChange={handleChange} />
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
