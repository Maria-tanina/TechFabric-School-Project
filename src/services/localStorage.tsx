interface LocalStorageService {
  set: <T>(key: string, value: T) => void;
  get: <T>(key: string) => T | null;
  has: (key: string) => boolean;
  remove: (key: string) => void;
  clear: () => void;
}

export const LSService = (): LocalStorageService => {
  const set: LocalStorageService["set"] = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const get: LocalStorageService["get"] = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  const has: LocalStorageService["has"] = (key) => {
    return localStorage.getItem(key) !== null;
  };

  const remove: LocalStorageService["remove"] = (key) => {
    localStorage.removeItem(key);
  };

  const clear: LocalStorageService["clear"] = () => {
    localStorage.clear();
  };

  return { set, get, has, remove, clear };
};
