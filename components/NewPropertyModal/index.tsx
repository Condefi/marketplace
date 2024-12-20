"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import { cn } from "@/lib/utils";
import { useUserPropertiesStore } from "@/state/useUserPropertiesStore";
import { Property } from "@/types/property";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Calendar } from "../ui/calendar";
import ImageInputPreview from "../ui/image-input-preview";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { RainbowButton } from "../ui/rainbow-button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const NewPropertyModal = () => {
  const initialFormState: Partial<Property> = {
    name: "",
    description: "",
    image: "",
    external_url: "",
    attributes: [],
    properties: {
      amenities: [],
      building_stats: {
        height: 0,
        floors: 0,
        total_units: 0,
        retail_centers: 0,
        elevators: 0,
      },
      investment_metrics: {
        projected_roi: 0,
        projected_occupancy: 0,
        projection_period: 0,
      },
    },
    treasury: {
      minDeposit: 0,
      maxDeposit: 0,
      deadline: 0,
    },
  };

  const [formData, setFormData] = useState<Partial<Property>>(initialFormState);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2;

  const { addUserProperty } = useUserPropertiesStore();
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      return;
    }
    addUserProperty({
      id: Date.now().toString(),
      campaignId: Date.now().toString(),
      ...formData,
    } as Property);
    setFormData(initialFormState);
    setCurrentStep(1);
    setOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev };

      switch (name) {
        case "name":
        case "description":
          updated[name] = value;
          break;
        case "propertyType":
        case "location":
        case "term":
          const attributes = [...(updated.attributes || [])];
          const existingIndex = attributes.findIndex(
            (attr) => attr.trait_type === name
          );
          if (existingIndex >= 0) {
            attributes[existingIndex].value = value;
          } else {
            attributes.push({ trait_type: name, value });
          }
          updated.attributes = attributes;
          break;
        case "endDate":
          const deadline = new Date(value).getTime();
          updated.treasury = {
            minDeposit: updated.treasury?.minDeposit ?? 0,
            maxDeposit: updated.treasury?.maxDeposit ?? 0,
            deadline,
          };
          break;
      }
      return updated;
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
              Property Details
            </h3>
            <Input
              type="text"
              name="name"
              placeholder="Property Name"
              value={formData.name || ""}
              onChange={handleInputChange}
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-neutral-700"
            />
            <Input
              type="text"
              name="description"
              placeholder="Property Description"
              value={formData.description || ""}
              onChange={handleInputChange}
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-neutral-700"
            />
            <Input
              type="number"
              name="minDeposit"
              placeholder="Minimum Deposit"
              value={formData.treasury?.minDeposit || ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  treasury: {
                    minDeposit: Number(e.target.value),
                    maxDeposit: prev.treasury?.maxDeposit ?? 0,
                    deadline: prev.treasury?.deadline ?? 0,
                  },
                }))
              }
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-neutral-700"
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
              Property Details
            </h3>
            <Select
              name="propertyType"
              value={
                formData.attributes
                  ?.find((attr) => attr.trait_type === "propertyType")
                  ?.value?.toString() || ""
              }
              onValueChange={(value) =>
                handleInputChange({
                  target: { name: "propertyType", value },
                } as any)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>

            <Select
              name="location"
              value={
                formData.attributes
                  ?.find((attr) => attr.trait_type === "location")
                  ?.value?.toString() || ""
              }
              onValueChange={(value) =>
                handleInputChange({
                  target: { name: "location", value },
                } as any)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="miami">Miami</SelectItem>
                <SelectItem value="new-york">New York</SelectItem>
              </SelectContent>
            </Select>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !formData.treasury?.deadline && "text-gray-500"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.treasury?.deadline ? (
                    format(new Date(formData.treasury.deadline), "PPP")
                  ) : (
                    <span>Pick a deadline</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={
                    formData.treasury?.deadline
                      ? new Date(formData.treasury.deadline)
                      : undefined
                  }
                  onSelect={(date) =>
                    handleInputChange({
                      target: {
                        name: "endDate",
                        value: date ? date.toISOString() : "",
                      },
                    } as any)
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <ImageInputPreview
              file={formData.image ? new File([], formData.image) : null}
              onFileChange={(file) => {
                if (file) {
                  const url = URL.createObjectURL(file);
                  setFormData((prev) => ({
                    ...prev,
                    image: url,
                  }));
                }
              }}
              width={400}
              height={300}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <RainbowButton className="bg-gradient-to-r from-blue-600 to-purple-600 w-full rounded-full h-10">
          List your Property
        </RainbowButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit} className="space-y-4">
          {renderStep()}

          <div className="flex gap-2">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="flex-1"
              >
                Previous
              </Button>
            )}

            <RainbowButton
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 flex-1 h-10"
            >
              {currentStep === totalSteps ? "Create Property" : "Next"}
            </RainbowButton>
          </div>
        </form>
        <DialogFooter className="flex flex-col items-center">
          <p className="text-sm text-gray-500 text-center">
            Disclaimer: All investments carry risk. Please ensure you understand
            the terms and potential risks before creating or participating in
            any investment campaign.{" "}
            <span className="text-xs text-underline text-accent cursor-pointer">
              Read more
            </span>
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewPropertyModal;
