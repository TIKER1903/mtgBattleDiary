{
type: uploaded file
fileName: RenameModal.js
fullContent:
const { useState, useEffect } = React;

// グローバルからIconを取得
const Icon = window.Icon;

const RenameModal = ({ currentName, onClose, onSave }) => {
    const [value, setValue] = useState(currentName);

    useEffect(() => {
        setValue(currentName);
    }, [currentName]);

    const handleSave = () => {
        onSave(value);
    };

    return (
        <div className="fixed inset-0 bg-black/60 z-[110] flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm overflow-hidden animate-fade-in">
                <div className="p-4 border-b bg-slate-50">
                    <h3 className="font-bold text-slate-700 flex items-center gap-2">
                        <Icon name="pencil" size={16}/> デッキ名の変更
                    </h3>
                </div>
                <div className="p-6">
                    <p className="text-xs text-slate-500 mb-2 font-bold uppercase">New Deck Name</p>
                    <input 
                        type="text" 
                        className="w-full border border-slate-300 rounded p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" 
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="新しい名前を入力..."
                        autoFocus
                    />
                </div>
                <div className="p-4 border-t bg-slate-50 flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-200 rounded transition font-bold">キャンセル</button>
                    <button onClick={handleSave} className="px-4 py-2 text-sm bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition shadow-sm">変更を保存</button>
                </div>
            </div>
        </div>
    );
};

// グローバルに公開
window.RenameModal = RenameModal;
}
