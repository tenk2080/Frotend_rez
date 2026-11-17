 
export interface ValidationResult {
  ok: boolean;
  message?: string;
}

export function BookValidation(user: number, inputValue: string): ValidationResult {
  const value = inputValue.trim();

  if (user === 1) {
    if (value.length === 0 || value.length > 15) {
      return { ok: false, message: 'Слишком короткое или длинное название' };
    }
    return { ok: true };
  }

  if (user === 2) {
    if (value.length === 0 || value.length > 20) {
      return { ok: false, message: 'Слишком короткое или длинное имя и фамилия автора' };
    }
    return { ok: true };
  }

  if (user === 3) {
     
    return { ok: true };
  }

  if (user === 4) {
    const num = Number(value);
    if (!Number.isFinite(num) || num < 1 || num > 5) {
      return { ok: false, message: 'Рейтинг выходит за диапазон допустимого (1–5)' };
    }
    return { ok: true };
  }

  if (user === 5) {
    if (value.length > 100) {
      return { ok: false, message: 'Слишком длинное описание' };
    }
    return { ok: true };
  }

  if (user === 6) {
    if (value.length > 200) {
      return { ok: false, message: 'Слишком длинная ссылка' };
    }
    return { ok: true };
  }

 
  return { ok: false, message: '' };
}