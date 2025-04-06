
interface RatingProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  color?: string;
}

const Rating = ({ 
  value, 
  max = 5, 
  size = "md", 
  color = "text-yellow-400"
}: RatingProps) => {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <div className="flex">
      {[...Array(max)].map((_, i) => (
        <span key={i} className={`${color} ${sizeClasses[size]}`}>
          {i < value ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default Rating;
