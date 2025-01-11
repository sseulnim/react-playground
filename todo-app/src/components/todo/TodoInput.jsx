import { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const TodoInput = ({ onAdd, categories, category, onCategoryChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAdd(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-2">
        <Select value={String(category)} onValueChange={(value) => onCategoryChange(Number(value))  }>
          <SelectTrigger className="w-[180px] flex justify-between items-center">
            <SelectValue placeholder="카테고리 선택" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={String(cat.id)}>{cat.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="할 일을 입력하세요"
          className="flex-1"
        />
        <Button type="submit">추가</Button>
      </div>
    </form>
  );
};

TodoInput.propTypes = {
  onAdd: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  category: PropTypes.number.isRequired,
  onCategoryChange: PropTypes.func.isRequired
};