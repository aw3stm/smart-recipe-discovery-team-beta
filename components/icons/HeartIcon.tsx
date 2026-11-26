function HeartIcon({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={`flex size-11 items-center justify-center rounded-full bg-white ${className}`}
      aria-label="Add to favorites"
    >
      <svg className="size-6" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M19.282,1.904c-2.57-.85-5.459.56-7.282,3.266-1.824-2.706-4.712-4.116-7.282-3.266C1.427,2.993-.087,6.582,1.339,10.891c1.425,4.307,10.661,11.453,10.661,11.453,0,0,9.236-7.146,10.661-11.453s-.088-7.897-3.379-8.986h0Z"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
      </svg>
    </button>
  );
}

export default HeartIcon;
